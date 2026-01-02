import React from "react";

/**
 * Props for the AutoYear component
 */
export interface AutoYearProps {
  /**
   * The HTML element to render. Defaults to 'span'.
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * Additional CSS class names
   */
  className?: string;
  /**
   * Additional inline styles
   */
  style?: React.CSSProperties;
}

/**
 * Props for the Copyright component
 */
export interface CopyrightProps extends AutoYearProps {
  /**
   * The copyright symbol or prefix. Defaults to '©'.
   */
  prefix?: string;
  /**
   * The name to display after the year (e.g., company or person name)
   */
  name?: string;
  /**
   * Optional starting year for range display (e.g., "2020-2026")
   */
  startYear?: number;
  /**
   * Separator between prefix, year, and name. Defaults to ' '.
   */
  separator?: string;
}

/**
 * A React component that automatically renders the current year.
 * Perfect for copyright notices and footers.
 *
 * @example
 * ```tsx
 * <AutoYear />
 * // Renders: 2026
 *
 * <AutoYear as="strong" className="year" />
 * // Renders: <strong class="year">2026</strong>
 * ```
 */
export function AutoYear({
  as: Component = "span",
  className,
  style,
}: AutoYearProps): React.ReactElement {
  const year = new Date().getFullYear();

  return React.createElement(Component, { className, style }, year.toString());
}

/**
 * A convenience component for rendering a complete copyright line.
 *
 * @example
 * ```tsx
 * <Copyright name="Acme Inc" />
 * // Renders: © 2026 Acme Inc
 *
 * <Copyright prefix="Copyright" name="Acme Inc" startYear={2020} />
 * // Renders: Copyright 2020-2026 Acme Inc
 * ```
 */
export function Copyright({
  as: Component = "span",
  className,
  style,
  prefix = "©",
  name,
  startYear,
  separator = " ",
}: CopyrightProps): React.ReactElement {
  const currentYear = new Date().getFullYear();

  const yearDisplay =
    startYear && startYear < currentYear
      ? `${startYear}-${currentYear}`
      : currentYear.toString();

  const parts = [prefix, yearDisplay, name].filter(Boolean);
  const text = parts.join(separator);

  return React.createElement(Component, { className, style }, text);
}

/**
 * Options for the useCopyright hook
 */
export interface UseCopyrightOptions {
  /**
   * The copyright symbol or prefix. Defaults to '©'.
   */
  prefix?: string;
  /**
   * The name to display after the year (e.g., company or person name)
   */
  name?: string;
  /**
   * Optional starting year for range display (e.g., "2020-2026")
   */
  startYear?: number;
  /**
   * Separator between prefix, year, and name. Defaults to ' '.
   */
  separator?: string;
}

/**
 * A hook that returns the current year as a number.
 * Useful when you need the year value for custom rendering.
 *
 * @example
 * ```tsx
 * const year = useAutoYear();
 * // Returns: 2026
 *
 * return <span>Established {year}</span>;
 * ```
 */
export function useAutoYear(): number {
  return new Date().getFullYear();
}

/**
 * A hook that returns a formatted copyright string.
 * Useful when you need the copyright text for custom rendering.
 *
 * @example
 * ```tsx
 * const copyright = useCopyright({ name: "Acme Inc" });
 * // Returns: "© 2026 Acme Inc"
 *
 * const withRange = useCopyright({ name: "Acme Inc", startYear: 2020 });
 * // Returns: "© 2020-2026 Acme Inc"
 * ```
 */
export function useCopyright(options: UseCopyrightOptions = {}): string {
  const { prefix = "©", name, startYear, separator = " " } = options;

  const currentYear = new Date().getFullYear();

  const yearDisplay =
    startYear && startYear < currentYear
      ? `${startYear}-${currentYear}`
      : currentYear.toString();

  const parts = [prefix, yearDisplay, name].filter(Boolean);
  return parts.join(separator);
}

// Default export for convenience
export default AutoYear;
