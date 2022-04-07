import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
const filterReducer = (filterState, action) => {
  let filterStateCopy = { ...filterState };
  switch (action.type) {
    case "UPDATE_PRODUCTS":
      filterStateCopy = {
        ...filterStateCopy,
        product: action.payload.products,
        default: action.payload.products,
      };
      break;

    case "ADD_TO_HISTORY":
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isHistory: !item.isHistory }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      break;

    case "ADD_TO_WATCHLATER":
      console.log(filterStateCopy.product);
      console.log(action.payload.itemId);
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isWatchLater: !item.isWatchLater }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      console.log(filterStateCopy.product);
      break;

    case "REMOVE_FROM_WATCHLATER":
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...filterStateCopy.product.map((item) =>
            item._id === action.payload.itemId
              ? { ...item, isWatchLater: false }
              : item
          ),
        ],
      };
      filterStateCopy = {
        ...filterStateCopy,
        default: [...filterStateCopy.product],
      };
      break;

    default:
      break;
  }

  return { ...filterStateCopy };
};
const FilterContext = createContext(null);
const FilterProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(filterReducer, {
    product: [],
    default: [],
  });

  useEffect(() => {
    (async () => {
      let response = await axios.get("/api/videos");
      console.log(response);
      productDispatch({
        type: "UPDATE_PRODUCTS",
        payload: { products: response.data.videos },
      });
    })();
  }, []);

  return (
    <FilterContext.Provider value={{ productState, productDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);
export { FilterProvider, useFilter };