import { DropDown } from "./"
import { useSearchParams } from "react-router-dom"


export const SearchForm = ({authorOptions}) => {
    const [searchParams, setSearchParams] = useSearchParams()
    
    //options for dropdowns format: [Name to display, value to pass to url]
    const sortOptions =[
        ["Date Published", "created_at"],
        ["Alphabetical on Title", "title"],
        ["Most Votes", "votes"],
        ["Most Commented", "comment_count"]
    ]
    const orderOptions = [ ["Descending", "desc"], ["Ascending", "asc"]]
    

    // functions to set search params in url
    const changeSortBy = (e) => {
        setSearchParams(currSearchParams => {  
         const entries = []

         for (let entry of currSearchParams.entries()) {
            if (entry[0] !== "sort_by") {
                entries.push(entry)
            }
         }
            return [...entries, ["sort_by", e.target.value]]
        })

    }

    const changeOrder = (e) => {
        setSearchParams(currSearchParams => {  
         const entries = []

         for (let entry of currSearchParams.entries()) {
            if (entry[0] !== "order") {
                entries.push(entry)
            }
         }
            return [...entries, ["order", e.target.value]]
        })
    }

    const changeAuthor = (e) => {
        setSearchParams(currSearchParams => {  
         const entries = []

         for (let entry of currSearchParams.entries()) {
            if (entry[0] !== "author") {
                entries.push(entry)
            }
         }
            return [...entries, ["author", e.target.value]]
        })
    }


    return (<form className="search-prefs">
        <label>
            Sort by:
            <select value={searchParams.get("sort_by") || "created_at"} onChange={changeSortBy}>
            <DropDown optionsArray={sortOptions} />
            </select>
        </label>
        <label>
            Order:
            <select value={searchParams.get("order") || "desc"} onChange={changeOrder}>
                <DropDown optionsArray={orderOptions} />
            </select>
        </label>
        {window.innerWidth < 900 ? <br /> : ""}
        <label>
            Author:
            <select value={searchParams.get("author") || "all"} onChange={changeAuthor}>
                <DropDown optionsArray={authorOptions} />
            </select>
        </label>
    </form>)
}