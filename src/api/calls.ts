import axios from "axios";
import { endpoints } from "./endpoints";
import { useQuery } from "@tanstack/react-query";
import { ProductFetchType } from "../types";

const fetchProducts = () => axios.get<Promise<ProductFetchType>>(endpoints.products).then(res => res.data).catch(err => console.error(err))
const fetchCategoryList = () => axios.get<Promise<Array<string>>>(endpoints.category_list).then(res => res.data).catch(err => console.error(err))

export const useFetchedProducts = () => useQuery({ queryKey: ['products'], queryFn: fetchProducts })
export const useFetchedCategoryList = () => useQuery({ queryKey: ['category-list'], queryFn: fetchCategoryList })