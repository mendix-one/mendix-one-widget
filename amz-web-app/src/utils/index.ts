export const parseJsonStringSlient = (str: string | undefined): { [key: string]: number | string | boolean } => {
  try {
    if (str && str.trim()) {
      return JSON.parse(str.trim()) as { [key: string]: number | string | boolean }
    }

    return {} as { [key: string]: number | string | boolean }
  } catch (ex) {
    console.warn(ex)
    return {} as { [key: string]: number | string | boolean }
  }
}

export default {
  parseJsonStringSlient,
}
