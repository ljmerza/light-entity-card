/**
 * Logging utility for the light-entity-card
 *
 * Provides consistent logging across the application with configurable log levels.
 */

/**
 * Available log levels
 */
export enum LogLevel {
  DEBUG = 0,
  INFO = 1,
  WARN = 2,
  ERROR = 3,
  NONE = 4,
}

/**
 * Logger class for consistent logging throughout the application
 */
class Logger {
  private level: LogLevel = LogLevel.INFO;
  private prefix = '[light-entity-card]';

  /**
   * Sets the current log level
   * Only messages at or above this level will be logged
   *
   * @param level - The log level to set
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Gets the current log level
   */
  getLevel(): LogLevel {
    return this.level;
  }

  /**
   * Logs a debug message
   * Use for detailed diagnostic information
   *
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  debug(message: string, ...args: any[]): void {
    if (this.level <= LogLevel.DEBUG) {
      console.debug(`${this.prefix} ${message}`, ...args);
    }
  }

  /**
   * Logs an info message
   * Use for general informational messages
   *
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  info(message: string, ...args: any[]): void {
    if (this.level <= LogLevel.INFO) {
      console.info(`${this.prefix} ${message}`, ...args);
    }
  }

  /**
   * Logs a warning message
   * Use for potentially problematic situations
   *
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  warn(message: string, ...args: any[]): void {
    if (this.level <= LogLevel.WARN) {
      console.warn(`${this.prefix} ${message}`, ...args);
    }
  }

  /**
   * Logs an error message
   * Use for error conditions that should be investigated
   *
   * @param message - The message to log
   * @param error - Optional Error object
   * @param args - Additional arguments to log
   */
  error(message: string, error?: Error | unknown, ...args: any[]): void {
    if (this.level <= LogLevel.ERROR) {
      if (error instanceof Error) {
        console.error(`${this.prefix} ${message}`, error.message, error.stack, ...args);
      } else {
        console.error(`${this.prefix} ${message}`, error, ...args);
      }
    }
  }

  /**
   * Creates a new logger instance with a custom prefix
   *
   * @param prefix - Custom prefix for log messages
   * @returns A new Logger instance
   */
  withPrefix(prefix: string): Logger {
    const newLogger = new Logger();
    newLogger.prefix = `[light-entity-card:${prefix}]`;
    newLogger.level = this.level;
    return newLogger;
  }
}

/**
 * Global logger instance
 * Use this throughout the application for consistent logging
 *
 * @example
 * ```typescript
 * import { logger } from './utils/logger';
 *
 * logger.debug('Component initialized');
 * logger.info('Service call successful', { entity_id: 'light.living_room' });
 * logger.warn('Feature not supported', featureName);
 * logger.error('Service call failed', error);
 * ```
 */
export const logger = new Logger();

// Enable debug logging in development
// Check if we're in development mode (various methods)
if (
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.port === '5000')
) {
  logger.setLevel(LogLevel.DEBUG);
}
