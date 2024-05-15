export const BOARD_SIZE: number = 10;
export const STRAIGHT_COUNT: number = 5;
export const DIRECTIONS: number[][] = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1]
];

export const CREATE_BOARD = "CREATE_BOARD";
export const UPDATE_BOARD = "UPDATE_BOARD";

export const CREATE_LOG = "CREATE_LOG";

export const TIME_OPTIONS: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Use 24-hour format
};

export const TAB_TYPES: string[] = ["all", "playerA", "playerB"]
