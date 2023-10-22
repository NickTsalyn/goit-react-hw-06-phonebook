import { FilterWrapper } from "./Filter.styled"
import { useDispatch, useSelector } from 'react-redux';
import { setContactFilter } from "redux/filterSlice";



export const Filter = () => {

  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

    return (
        <FilterWrapper>
      <label htmlFor="Filter">Find contacts by name</label>
      <input type="text" name="Filter" value={filter}  onChange={e => dispatch(setContactFilter(e.currentTarget.value))}/>
      </FilterWrapper>
    )
}