import { LogEntry, LogLevel } from '../types';

class Logger {
  private static instance: Logger;
  private logs: LogEntry[] = [];
  private maxLogs: number = 100;
  private logToConsole: boolean = process.env.NODE_ENV !== 'production';

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  private log(level: LogLevel, message: string, context?: Record<string, unknown>): void {
    const timestamp = new Date().toISOString();
    const entry: LogEntry = {
      level,
      message,
      timestamp,
      context
    };

    // Add to in-memory logs
    this.logs.unshift(entry);

    // Trim logs if exceeding max size
    if (this.logs.length > this.maxLogs) {
      this.logs = this.logs.slice(0, this.maxLogs);
    }

    // Log to console in non-production environments
    if (this.logToConsole) {
      const contextStr = context ? ` ${JSON.stringify(context)}` : '';

      switch (level) {
        case 'info':
          console.info(`[INFO] ${timestamp}: ${message}${contextStr}`);
          break;
        case 'warn':
          console.warn(`[WARN] ${timestamp}: ${message}${contextStr}`);
          break;
        case 'error':
          console.error(`[ERROR] ${timestamp}: ${message}${contextStr}`);
          break;
        case 'debug':
          console.debug(`[DEBUG] ${timestamp}: ${message}${contextStr}`);
          break;
      }
    }
  }

  public info(message: string, context?: Record<string, unknown>): void {
    this.log('info', message, context);
  }

  public warn(message: string, context?: Record<string, unknown>): void {
    this.log('warn', message, context);
  }

  public error(message: string, context?: Record<string, unknown>): void {
    this.log('error', message, context);
  }

  public debug(message: string, context?: Record<string, unknown>): void {
    this.log('debug', message, context);
  }

  public getLogs(level?: LogLevel, limit: number = 10): LogEntry[] {
    if (level) {
      return this.logs.filter(log => log.level === level).slice(0, limit);
    }
    return this.logs.slice(0, limit);
  }
}

const logger = Logger.getInstance();

export default logger;
