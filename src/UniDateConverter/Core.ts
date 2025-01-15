import { UniDay, UnifiedDateType, UniMonth, UniWeek } from "./Definitions";
import { FestiveDate, RegularDate } from "./Names";

export enum Variant {
    UNI = "Unified",
    SWT = "SWT",
    AUS = "Austral",
}

export enum Style {
    LONG = "Long",
    SHORT = "Short",
    ISO = "ISO",
}

/**
 * Transform Gregorian dates to Unified.

    By default we Unify the current system date if instantiated without parameters.
    To convert an arbitrary date, create an instance with an ISO 8601-formatted date string. E.g:

    ```
    let udate = new UnifiedDate('2015-04-20')
    ```

    You can also pass an ISO 8601-formatted date to an existing instance by calling the `unify` method.

    `UnifiedDate` can be printed to show a date's Unified format along with Sout-Western Territory and Austral
    formats.

    Unified Calendar Year Zero starts at Gregorian 5600 BC. This program doesn't convert prehistoric dates.

    @param initialDate ISO 8601-format date string (e.g. '2019-01-01')
    @property gregorian_date: ISO 8601-format date string (e.g. '2019-01-01')
    @property unified_date: Unified Date object
 */
export class UnifiedDate {
    static readonly WEEKDAY = RegularDate.WEEKDAY;
    static readonly _UNIFIED_MONTH_NAME_SHORT =
        RegularDate.UNIFIED_MONTH_NAME_SHORT;
    static readonly _UNIFIED_MONTH_NAME_LONG =
        RegularDate.UNIFIED_MONTH_NAME_LONG;
    static readonly _TERRITORIAN_MONTH_NAME_BASE =
        RegularDate.TERRITORIAN_MONTH_NAME_BASE;
    static readonly _AUSTRAL_MONTH_NAME_BASE =
        RegularDate.AUSTRAL_MONTH_NAME_BASE;

    private _year_start: Date | null = null;
    unified_date: UnifiedDateType | null = null;
    swt_date: UnifiedDateType | null = null;
    austral_date: UnifiedDateType | null = null;
    gregorian_date: string | null = null;

    constructor(
        public userDate: string = "",
        public style: string = Style.LONG,
    ) {
        const isValidDate = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(userDate);
        if (userDate && !isValidDate) {
            throw new Error("Invalid date format. Please use YYYY-MM-DD");
        }

        const formattedDate = userDate
            ? new Date(userDate).toISOString().split("T")[0]
            : new Date().toISOString().split("T")[0];

        // Assign values to instance variables
        this.gregorian_date = formattedDate;
        this.unified_date = this.unify(formattedDate, style);
    }

    /**
     * Check if value given is a valid Unified Calendar `Variant`.
     *
     * If the value is a `Variant` instance or a known `Variant` value, return the `Variant`. If not, return the
     * original parameter unchanged.
     * @param variant - Unified calendar Variant. Should be a valid `Variant` Enum, but can also be one of the Enum's
     *                values (e.g Variant.UNI or 'Unified' are both accepted)
     * @returns a `Variant` or the original value.
     */
    private _checkVariant(variant: Variant | string): string {
        if (variant in Variant) {
            return variant;
        } else {
            for (const thisVariant in Variant) {
                if (
                    thisVariant.toUpperCase() ==
                        variant.toUpperCase().trim()
                ) {
                    return thisVariant;
                }
            }
        }
        return variant;
    }

    /**
     * Check if value given is a valid Unified `Style` of date representaion.
     *
     * If the value is a known `Style` instance, return the `Style`. If not, return the original parameter unchanged.
     *
     * @param style - Representation style for a Unified Calendar variant. Should be a valid `Style` Enum, but can
     *                also be one of the Enum's values (e.g. Style.LONG or 'Long' are both accepted)
     * @returns a `Style`, or the original parameter.
     */
    private _checkStyle(style: Style | string): string {
        if (style in Style) {
            return style;
        } else {
            for (const thisStyle in Style) {
                if (thisStyle.toUpperCase() == style.toUpperCase().trim()) {
                    return thisStyle;
                }
            }
        }
        return style;
    }

    /**
     * Set and return Unified Date, formatted according to a regional variant (e.g. South-Western Territories).
     *
     * NOTE: Non-unified variants don't have a short-format name; they use the same name as the Unified variant.
     *
     * @param variant - Regional month name variant.
     * @param style - Calendar representation style.
     * @returns
     */
    format_date(
        variant: string = Variant.UNI,
        style: string = Style.LONG,
    ): string {
        variant = this._checkVariant(variant);
        style = this._checkStyle(style);

        let unidate: UnifiedDateType;
        switch (variant) {
            case Variant.UNI:
                unidate = this.unified_date!;
                break;
            case Variant.SWT:
                unidate = this.swt_date!;
                break;
            case Variant.AUS:
                unidate = this.austral_date!;
                break;
            default:
                throw new Error(
                    `Unknown variant: ${variant}. Expected ${Variant}`,
                );
        }

        if (style == Style.ISO) { // Fictional ISO 8601U "Unified ISO format"
            return `${unidate.year}-${unidate.month.numeric.quarter}${unidate.month.numeric.month}-${
                unidate.day.number.toString().padStart(2, "0")
            }`;
        }

        if (unidate.weekday.regular == 1) {
            const weekday = unidate.weekday;
            const day = this.getUniday(
                weekday,
                style == Style.SHORT ? Style.SHORT : Style.LONG,
            );
            const month = this.getUnimonth(weekday, variant, style);
            const dayNumber = style == Style.SHORT
                ? `${unidate.day.number}`
                : `${unidate.day.number.toString().padStart(2, "0")}`;

            return `${day.name} ${dayNumber}, ${month.name} ${unidate.year}`;
        }

        return `${unidate.month.name} ${unidate.year}`;
    }

    /**
     * @param day - day number (1..366) of the year.
     */
    getUniweek(day: number): UniWeek {
        if (FestiveDate.DAY.includes(day)) {
            return new UniWeek(0, FestiveDate.DAY.indexOf(day), day);
        }

        if (1 < day && day <= 91) {
            day -= 1;
        } else if (92 < day && day <= 182) {
            day -= 2;
        } else if (183 < day && day <= 273) {
            day -= 3;
        } else if (274 < day && day <= 364) {
            day -= 4;
        } else {
            throw new Error(`Day out of range: ${day}`);
        }

        const dayOfWeek = (((day % 90) % 18) % 6) || 6;
        return new UniWeek(1, dayOfWeek, day);
    }

    /**
     * Takes a UniWeek and returns UniDay containing {name of the week day, date}
     *
     * If `style` is specified, return day name in that format. Applies only to regular week days; festive
     * day names don't change.
     *
     * @param weekday - UniWeek
     * @param style - Calendar representation style.
     */
    getUniday(weekday: UniWeek, style: string = Style.LONG): UniDay {
        if (weekday.regular == 0) {
            return new UniDay(FestiveDate.SHORT_NAME[weekday.number], 0);
        }

        const monthDay = ((weekday.yearday % 90) % 18) || 18;
        if (monthDay < 1 || monthDay > 18) {
            throw new Error(`Invalid week object: ${weekday}`);
        }

        // style = this._checkStyle(style);
        if (style === Style.LONG) {
            const dayName = Object.entries(
                UnifiedDate.WEEKDAY,
            ).find(([, days]) => days.includes(weekday.number))![0];
            return new UniDay(dayName, monthDay);
        }
        return new UniDay(`D${monthDay}`, monthDay);
    }

    /**
     * Take a unified weekday, return unified month.
     *
     * @param weekday - Unified weekday.
     * @param variant - Regional month name variant.
     * @param style - Calendar representation style.
     */
    getUnimonth(
        weekday: UniWeek,
        variant: string = Variant.UNI,
        style: string = Style.LONG,
    ): UniMonth {
        let monthNumber: number | string;
        if (weekday.number) {
            monthNumber = Math.trunc((weekday.yearday - 1) / 18) + 1;
            if (monthNumber > 20) {
                monthNumber = 20;
            }
        } else {
            monthNumber = FestiveDate.SHORT_NAME[weekday.number];
        }

        if (style == Style.SHORT) {
            return UnifiedDate._UNIFIED_MONTH_NAME_SHORT[monthNumber];
        }

        variant = this._checkVariant(variant);

        if (typeof monthNumber == "string") {
            return UnifiedDate._UNIFIED_MONTH_NAME_LONG[monthNumber];
        }

        switch (variant) {
            case Variant.AUS:
                return UnifiedDate._AUSTRAL_MONTH_NAME_BASE[monthNumber];
            case Variant.SWT:
                return UnifiedDate._TERRITORIAN_MONTH_NAME_BASE[monthNumber];
            default:
                return UnifiedDate._UNIFIED_MONTH_NAME_LONG[monthNumber];
        }
    }

    unify(
        userDate: string = "",
        style: string = Style.LONG,
    ): UnifiedDateType {
        if (!userDate) {
            userDate = new Date().toISOString().split("T")[0];
        }
        this.gregorian_date = userDate;

        let udate: Date;
        try {
            udate = new Date(userDate);
        } catch (err) {
            const msg =
                `Date ${userDate} must be in ISO-8601 format (YYYY-MM-DD)`;
            console.error(`Sorry, ${msg}`);
            throw new Error(msg);
        }
        try {
            this._year_start = new Date(`${udate.getFullYear()}-01-01`);
        } catch (err) {
            const msg = `Unable to process date ${udate}: ${err}`;
            console.error(msg);
            throw new Error(msg);
        }

        const days = Math.floor(
            (udate.getTime() -
                new Date(udate.getFullYear(), 0, 0)
                    .getTime()) /
                (1000 * 60 * 60 * 24),
        );
        const year = udate.getFullYear() + 5600;
        const uniWeekDay = this.getUniweek(days);
        const uniDay = this.getUniday(uniWeekDay, style);

        try {
            this.unified_date = new UnifiedDateType(
                uniWeekDay,
                uniDay,
                this.getUnimonth(
                    uniWeekDay,
                    Variant.UNI,
                    style,
                ),
                year,
            );
            this.swt_date = new UnifiedDateType(
                uniWeekDay,
                uniDay,
                this.getUnimonth(
                    uniWeekDay,
                    Variant.SWT,
                ),
                year,
            );
            this.austral_date = new UnifiedDateType(
                uniWeekDay,
                uniDay,
                this.getUnimonth(
                    uniWeekDay,
                    Variant.AUS,
                ),
                year,
            );
        } catch (err) {
            console.error(
                `Error: ${err}. Values: weekday=${uniWeekDay}, day=${uniDay}`,
            );
            throw err;
        }

        return this.unified_date;
    }

    reverse_year(unified_year: number): number {
        if (unified_year >= 0) {
            return unified_year - 5600;
        }
        throw new Error("Cannot convert Unified prehistoric dates.");
    }

    /**
     * Convert Unified date string to Gregorian date.
     *
     * @param u_date - ISO 8601U-formatted Unified Date string.
     */
    reverse_unidate(u_date: string): Date {
        try {
            const [_year, _quarter_month, _day] = u_date.split("-");
            const _yearNum = parseInt(_year);
            const _quarter = parseInt(_quarter_month[0]);
            const _month = parseInt(_quarter_month[1]);
            const _dayNum = parseInt(_day);

            const _gyear = this.reverse_year(_yearNum);

            let _gday: Date;
            if (_month == 0) {
                const DAYNUMS = [null, 1, 92, 183, 274, 365, 366];
                if (_quarter < 1 || _quarter > 6) {
                    throw new Error(
                        `Not an ISO-8601U date: ${u_date}`,
                    );
                }
                _gday = new Date(_gyear, 0, DAYNUMS[_quarter]!);
            } else {
                const _julian = 90 * (_quarter - 1) + 18 * (_month - 1) +
                    _dayNum;
                _gday = new Date(_gyear, 0, _julian);
                _gday.setDate(_gday.getDate() + _quarter);
            }

            this.unify(_gday.toISOString().split("T")[0]);
            return _gday;
        } catch (err) {
            console.error(
                `Expected an ISO-8601U (YYYY-QM-DD) date: ${u_date}: ${err}`,
            );
            throw err;
        }
    }

    static today(style: Style = Style.LONG): UnifiedDate {
        return new UnifiedDate(
            new Date().toISOString().split("T")[0],
            style,
        );
    }

    print_calendar(): void {
        console.log(
            "Gregorian  Unified   Long                                   Territorian      Austral",
        );
        const _save_date = this.gregorian_date;
        const year_start = this._year_start!;
        let prev = "";

        for (let d = 0; d < 366; d++) {
            this.gregorian_date = new Date(
                year_start.getTime() + d * 24 * 60 * 60 * 1000,
            )
                .toISOString()
                .split("T")[0];
            this.unify(this.gregorian_date);
            const iso = this.format_date("Unified", "ISO");
            const uni = this.format_date("Unified");
            const swt = this.swt_date!.month.name;
            const aus = this.austral_date!.month.name;

            const date =
                `${this.gregorian_date}  ${iso}  ${uni}  ${swt}  ${aus}`;

            if (this.unified_date!.weekday.regular == 0) {
                console.log(`\n${"=".repeat(104)}`);
            } else if (this.unified_date!.month.name != prev) {
                console.log(`${"-".repeat(104)}`);
            }

            if (d < 365 || this.unified_date!.month.numeric.quarter == 6) {
                console.log(date);
            }

            prev = this.unified_date!.month.name;
        }

        this.unify(_save_date!);
    }
}
