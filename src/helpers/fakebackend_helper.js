import axios from "axios";
import { del, get, post, put } from "./api_helper";
import * as url from "./url_helper";

export const getDashboardData = () => get(url.GET_DASHBOARD_DATA);