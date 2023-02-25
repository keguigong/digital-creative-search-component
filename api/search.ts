import axios, { AxiosResponse } from "axios"

export interface Result {
  title: string
  description: string
  image: string
  url: string
  category: string
}

type Results = Result[]

export function getSearchResult(keyword: string) {
  return new Promise<Result[] | Error>((resolve) => {
    axios
      .get<Results>(
        `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${keyword}`,
        {
          timeout: 10000
        }
      )
      .then((res) => resolve(res.data))
      .catch((error) => resolve(error))
  })
}
