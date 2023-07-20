export const DropDown = ({ optionsArray }) => {
    
    const formatOptions = optionsArray.map((option, index) => {
        return <option key={index} value={option[1]}>{option[0]}</option>})

    return formatOptions
}