import path from 'path'

class LogMessage {
  private readonly message: string
  private readonly data: any
  private readonly sourceFile: string
  private readonly lineNumber: number

  constructor(message: string, data?: any) {
    this.message = message
    this.data = data

    const error = new Error()
    const stackTrace = error.stack
    if (stackTrace) {
      const stackTraceLines = stackTrace.split('\n')
      const callerLine = stackTraceLines[3]
      const matchResult = callerLine.match(/\((.*):\d+:\d+\)/)
      this.sourceFile = matchResult ? path.basename(matchResult[1]) : 'Unknown'
      this.lineNumber = Number(callerLine.split(':')[1])
    } else {
      this.sourceFile = 'Unknown'
      this.lineNumber = -1
    }
  }

  public toString(): string {
    const output = {
      sourceFile: this.sourceFile,
      lineNumber: this.lineNumber,
      message: this.message,
      ...(this.data && {
        data: this.data,
      }),
    }

    return JSON.stringify(output)
  }
}

export default LogMessage
