
/**
 * Abreviated representation of a Unified day
 *
 * @property name - Unified weekday name
 * @property number - Unified weekday number
 */
export class UniDay {
    constructor(readonly name:string, readonly number: number) {
        this.name = name;
        this.number = number;
    }
}

/**
 * Abreviated representation of a Unified Week
 *
 * @property regular - flag to indicate if date is regular or festive: 0=festive, 1=regular
 * @property number - day of the week [1-6]
 * @property yearday - day of the year [1-366]
 */
export class UniWeek {
  constructor(
    readonly regular: number,
    readonly number: number,
    readonly yearday: number,
  ) {
    this.regular = regular;
    this.number = number;
    this.yearday = yearday;
  }
}

/**
 * Abreviated representation of a Unified Month
 *
 * @property name - Unified month name
 * @property numeric - Unified month descriptor: (quarter #, month #)
 */
export class UniMonth {
  constructor(readonly name: string, readonly numeric: UQ) {
    this.name = name;
    this.numeric = numeric;
  }
}

/**
 * Abreviated representation of a Unified quarter
 *
 * @property quarter - Unified quarter number
 * @property month - Unified month number
 */
export class UQ {
  constructor(readonly quarter: number, readonly month: number) {
    this.quarter = quarter;
    this.month = month;
  }
}

/**
 * Abreviated representation of a Unified date
 *
 * @property weekday - Unified week descriptor: (regular flag, day of the week, day of the year)
 * @property day - Unified day descriptor: (weekday name, weekday number)
 * @property month - Unified month descriptor: (month name, numeric descriptor(quarter #, month #), year)
 * @property year - Unified year
 */
export class UnifiedDateType {
  constructor(
    readonly weekday: UniWeek,
    readonly day: UniDay,
    readonly month: UniMonth,
    readonly year: number,
  ) {
    this.weekday = weekday;
    this.day = day;
    this.month = month;
    this.year = year;
  }
}
