export interface IDropdownProps {
    title: string,
    options: string[],
    onOptionClick(option: string): any
}