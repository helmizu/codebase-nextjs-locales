type AsyncReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => Promise<infer U> ? U :
  T extends (...args: any) => infer U ? U : any;

export const promise = <T extends (...args: any) => any>(callback: T, rejectedValue: any): Promise<AsyncReturnType<T>> => {
  return new Promise<AsyncReturnType<T>>(async (resolve) => {
    try {
      resolve(await callback())
    } catch (error) {
      resolve(rejectedValue)
    }
  });
}