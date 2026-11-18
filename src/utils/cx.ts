type ClassValue = string | false | null | undefined;

/** Joins truthy class names: cx('a', cond && 'b') */
const cx = (...classes: ClassValue[]): string => classes.filter(Boolean).join(' ');

export default cx;
