export const DropDown = ({ optionsArray }) => {
    
    const formatOptions = optionsArray.map((option) => {
        return <option key={option[1]} value={option[1]}>{option[0]}</option>})

    return formatOptions
}