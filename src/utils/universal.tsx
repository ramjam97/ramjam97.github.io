import type { DateDisplayFormat, DateString } from "@/types/cv";

export function array_shuffle(array: string[] = []) {
    if (!Array.isArray(array)) return [];
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // swap
    }
    return array;
}

export function getMonthYear(dateString: string) {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${year}`;
}
export function getYear(dateString: string) {
    const date = new Date(dateString);
    return date.getFullYear();
}

export function getDisplayDate(dateStr: DateString, displayFormat: DateDisplayFormat) {

    if (typeof dateStr === "string" && dateStr.toLowerCase() === "present") {
        return "Present";
    }

    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
        return "";
    }

    const options: Intl.DateTimeFormatOptions =
        displayFormat === "month-year"
            ? { year: "numeric", month: "short" }
            : { year: "numeric" };

    return date.toLocaleDateString("en-US", options);
}

export function getDateRangeDiff(startDateStr: DateString, endDateStr: DateString) {
    const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.44;

    const startDate = new Date(startDateStr);
    const endDate = endDateStr.toLowerCase() === "present" ? new Date() : new Date(endDateStr);

    let diffInMonths = (endDate.getTime() - startDate.getTime()) / MS_PER_MONTH;

    let years = Math.floor(diffInMonths / 12);
    let months = Math.round(diffInMonths % 12);

    // 🔥 Fix: rollover 12 months → +1 year
    if (months === 12) {
        years += 1;
        months = 0;
    }

    const parts = [];

    if (years > 0) {
        parts.push(`${years} yr${years > 1 ? "s" : ""}`);
    }

    if (months > 0) {
        parts.push(`${months} mo${months > 1 ? "s" : ""}`);
    }

    const text = parts.join(" ");

    return { years, months, text };
}

export function sortArrayObjectByKey(array: any[], key: string, descending: boolean = false) {
    return array.sort((a, b) => {
        if (a[key] < b[key]) return descending ? 1 : -1;
        if (a[key] > b[key]) return descending ? -1 : 1;
        return 0;
    });
}