import React from "react"

interface SearchProps {
    value: string
    onChange: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({ value, onChange }: SearchProps) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e.currentTarget.value)
    }

    return (
        <>
            <input
                name="search"
                type="text"
                value={value}
                onChange={handleChange}
            />
        </>
    )
}
export default Input
