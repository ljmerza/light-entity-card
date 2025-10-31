/**
 * Logging utility for the light-entity-card
 *
 * Provides consistent logging across the application with configurable log levels.
 */
/**
 * Available log levels
 */
export declare enum LogLevel {
    DEBUG = 0,
    INFO = 1,
    WARN = 2,
    ERROR = 3,
    NONE = 4
}
/**
 * Logger class for consistent logging throughout the application
 */
declare class Logger {
    private level;
    private prefix;
    /**
     * Sets the current log level
     * Only messages at or above this level will be logged
     *
     * @param level - The log level to set
     */
    setLevel(level: LogLevel): void;
    /**
     * Gets the current log level
     */
    getLevel(): LogLevel;
    /**
     * Logs a debug message
     * Use for detailed diagnostic information
     *
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    debug(message: string, ...args: any[]): void;
    /**
     * Logs an info message
     * Use for general informational messages
     *
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    info(message: string, ...args: any[]): void;
    /**
     * Logs a warning message
     * Use for potentially problematic situations
     *
     * @param message - The message to log
     * @param args - Additional arguments to log
     */
    warn(message: string, ...args: any[]): void;
    /**
     * Logs an error message
     * Use for error conditions that should be investigated
     *
     * @param message - The message to log
     * @param error - Optional Error object
     * @param args - Additional arguments to log
     */
    error(message: string, error?: Error | unknown, ...args: any[]): void;
    /**
     * Creates a new logger instance with a custom prefix
     *
     * @param prefix - Custom prefix for log messages
     * @returns A new Logger instance
     */
    withPrefix(prefix: string): Logger;
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
export declare const logger: Logger;
export {};
//# sourceMappingURL=logger.d.ts.map