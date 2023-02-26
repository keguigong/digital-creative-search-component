import axios, { isCancel } from "axios"

export interface Result {
  title: string
  description: string
  image: string
  url: string
  category: string
}

type Results = Result[]

const digitalCreative = "https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search="

/**
 * Store the controller to cancel the requst
 */
export let controller: AbortController | null = null

export function getSearchResult(keyword: string) {
  if (controller instanceof AbortController) controller.abort()
  controller = new AbortController()

  return new Promise<Result[] | Error>((resolve) => {
    axios
      .get<Results>(`${digitalCreative}${keyword}`, {
        timeout: 5000,
        signal: controller!!.signal
      })
      .then((res) => {
        controller = null
        resolve(res.data)
      })
      .catch((error) => {
        controller = null
        /**
         * If the request is canceled by user, ignore error.
         * Cancel can be resulted by user and timeout, timeout error cannot be ignored.
         */
        isCancel(error) ? undefined : resolve(error)
      })
  })
}

export function throttled(fn: (...args: any[]) => void) {
  let timer: NodeJS.Timeout | null = null
  let start = Date.now()

  return function (delay: number, ...args: any[]) {
    let now = Date.now()
    let remaining = delay - (now - start)
    timer && clearTimeout(timer)
    if (remaining <= 0) {
      fn.apply(null, args)
      start = Date.now()
    } else {
      timer = setTimeout(() => fn.apply(null, args), remaining)
    }
  }
}
