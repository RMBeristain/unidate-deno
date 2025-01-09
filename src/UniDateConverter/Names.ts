import { UniMonth, UQ } from "./Definitions";

/**
 * Festive Date short names and their corresponding day of the year.
 *
 * These dates are considered single-day months but don't have a month number, only a name.
 */
export class FestiveDate {
    static readonly DAY = [1, 92, 183, 274, 365, 366];
    static readonly SHORT_NAME = ["Q1", "Q2", "Q3", "Q4", "YE", "LD"];
}

/**
 * Regular date day and month names, and their corresponding day of the year.
 */
export class RegularDate {
    static readonly WEEKDAY: { [key: string]: number[] } = {
        Firstday: [1, 7, 13],
        Seconday: [2, 8, 14],
        Thirday: [3, 9, 15],
        Fourthday: [4, 10, 16],
        Fifthday: [5, 11, 17],
        Sixthday: [6, 12, 18],
    };

    static readonly UNIFIED_MONTH_NAME_SHORT: {
        [key: string | number]: UniMonth;
    } = {
        Q1: new UniMonth("Q10", new UQ(1, 0)),
        1: new UniMonth("Q1A", new UQ(1, 1)),
        2: new UniMonth("Q1B", new UQ(1, 2)),
        3: new UniMonth("Q1C", new UQ(1, 3)),
        4: new UniMonth("Q1D", new UQ(1, 4)),
        5: new UniMonth("Q1E", new UQ(1, 5)),
        Q2: new UniMonth("Q20", new UQ(2, 0)),
        6: new UniMonth("Q2A", new UQ(2, 1)),
        7: new UniMonth("Q2B", new UQ(2, 2)),
        8: new UniMonth("Q2C", new UQ(2, 3)),
        9: new UniMonth("Q2D", new UQ(2, 4)),
        10: new UniMonth("Q2E", new UQ(2, 5)),
        Q3: new UniMonth("Q30", new UQ(3, 0)),
        11: new UniMonth("Q3A", new UQ(3, 1)),
        12: new UniMonth("Q3B", new UQ(3, 2)),
        13: new UniMonth("Q3C", new UQ(3, 3)),
        14: new UniMonth("Q3D", new UQ(3, 4)),
        15: new UniMonth("Q3E", new UQ(3, 5)),
        Q4: new UniMonth("Q40", new UQ(4, 0)),
        16: new UniMonth("Q4A", new UQ(4, 1)),
        17: new UniMonth("Q4B", new UQ(4, 2)),
        18: new UniMonth("Q4C", new UQ(4, 3)),
        19: new UniMonth("Q4D", new UQ(4, 4)),
        20: new UniMonth("Q4E", new UQ(4, 5)),
        YE: new UniMonth("YE", new UQ(5, 0)),
        LD: new UniMonth("LD", new UQ(6, 0)),
    };

    static readonly UNIFIED_MONTH_NAME_LONG: {
        [key: string | number]: UniMonth;
    } = {
        Q1: new UniMonth("Quarter one", new UQ(1, 0)),
        1: new UniMonth("Quarter one-A", new UQ(1, 1)),
        2: new UniMonth("Quarter one-B", new UQ(1, 2)),
        3: new UniMonth("Quarter one-C", new UQ(1, 3)),
        4: new UniMonth("Quarter one-D", new UQ(1, 4)),
        5: new UniMonth("Quarter one-E", new UQ(1, 5)),
        Q2: new UniMonth("Quarter two", new UQ(2, 0)),
        6: new UniMonth("Quarter two-A", new UQ(2, 1)),
        7: new UniMonth("Quarter two-B", new UQ(2, 2)),
        8: new UniMonth("Quarter two-C", new UQ(2, 3)),
        9: new UniMonth("Quarter two-D", new UQ(2, 4)),
        10: new UniMonth("Quarter two-E", new UQ(2, 5)),
        Q3: new UniMonth("Quarter three", new UQ(3, 0)),
        11: new UniMonth("Quarter three-A", new UQ(3, 1)),
        12: new UniMonth("Quarter three-B", new UQ(3, 2)),
        13: new UniMonth("Quarter three-C", new UQ(3, 3)),
        14: new UniMonth("Quarter three-D", new UQ(3, 4)),
        15: new UniMonth("Quarter three-E", new UQ(3, 5)),
        Q4: new UniMonth("Quarter four", new UQ(4, 0)),
        16: new UniMonth("Quarter four-A", new UQ(4, 1)),
        17: new UniMonth("Quarter four-B", new UQ(4, 2)),
        18: new UniMonth("Quarter four-C", new UQ(4, 3)),
        19: new UniMonth("Quarter four-D", new UQ(4, 4)),
        20: new UniMonth("Quarter four-E", new UQ(4, 5)),
        YE: new UniMonth("Year end", new UQ(5, 0)),
        LD: new UniMonth("Leap day", new UQ(6, 0)),
    };

    static readonly TERRITORIAN_MONTH_NAME_BASE: {
        [key: string | number]: UniMonth;
    } = {
        1: new UniMonth("Winter freeze", new UQ(1, 1)),
        2: new UniMonth("Winter wane", new UQ(1, 2)),
        3: new UniMonth("Winter end", new UQ(1, 3)),
        4: new UniMonth("Spring low", new UQ(1, 4)),
        5: new UniMonth("Spring break", new UQ(1, 5)),
        6: new UniMonth("Spring height", new UQ(2, 1)),
        7: new UniMonth("Spring wane", new UQ(2, 2)),
        8: new UniMonth("Spring end", new UQ(2, 3)),
        9: new UniMonth("Summer low", new UQ(2, 4)),
        10: new UniMonth("Summer break", new UQ(2, 5)),
        11: new UniMonth("Summer height", new UQ(3, 1)),
        12: new UniMonth("Summer wane", new UQ(3, 2)),
        13: new UniMonth("Summer end", new UQ(3, 3)),
        14: new UniMonth("Autumn low", new UQ(3, 4)),
        15: new UniMonth("Autumn fall", new UQ(3, 5)),
        16: new UniMonth("Autumn lull|height", new UQ(4, 1)),
        17: new UniMonth("Autumn wane", new UQ(4, 2)),
        18: new UniMonth("Autumn end", new UQ(4, 3)),
        19: new UniMonth("Winter low", new UQ(4, 4)),
        20: new UniMonth("Winter chill", new UQ(4, 5)),
    };

    static readonly AUSTRAL_MONTH_NAME_BASE: {
        [key: string | number]: UniMonth;
    } = {
        1: new UniMonth("Summer height", new UQ(1, 1)),
        2: new UniMonth("Summer wane", new UQ(1, 2)),
        3: new UniMonth("Summer close", new UQ(1, 3)),
        4: new UniMonth("Autumn start", new UQ(1, 4)),
        5: new UniMonth("Autumn fall", new UQ(1, 5)),
        6: new UniMonth("Autumn lull", new UQ(2, 1)),
        7: new UniMonth("Autumn wane", new UQ(2, 2)),
        8: new UniMonth("Autumn close", new UQ(2, 3)),
        9: new UniMonth("Winter start", new UQ(2, 4)),
        10: new UniMonth("Winter chill", new UQ(2, 5)),
        11: new UniMonth("Winter lull", new UQ(3, 1)),
        12: new UniMonth("Winter wane", new UQ(3, 2)),
        13: new UniMonth("Winter close", new UQ(3, 3)),
        14: new UniMonth("Spring start", new UQ(3, 4)),
        15: new UniMonth("Spring break", new UQ(3, 5)),
        16: new UniMonth("Spring run", new UQ(4, 1)),
        17: new UniMonth("Spring wane", new UQ(4, 2)),
        18: new UniMonth("Spring close", new UQ(4, 3)),
        19: new UniMonth("Summer start", new UQ(4, 4)),
        20: new UniMonth("Summer break", new UQ(4, 5)),
    };

    // Helper function to merge objects (similar to ChainMap in Python)
    private static mergeObjects<T>(obj1: T, obj2: T): T {
        return Object.assign({}, obj1, obj2);
    }

    static get TERRITORIAN_MONTH_NAME_LONG(): {
        [key: string | number]: UniMonth;
    } {
        return RegularDate.mergeObjects(
            RegularDate.TERRITORIAN_MONTH_NAME_BASE,
            RegularDate.UNIFIED_MONTH_NAME_LONG,
        );
    }

    static get AUSTRAL_MONTH_NAME_LONG(): { [key: string | number]: UniMonth } {
        return RegularDate.mergeObjects(
            RegularDate.AUSTRAL_MONTH_NAME_BASE,
            RegularDate.UNIFIED_MONTH_NAME_LONG,
        );
    }
}
