import styled, { css } from "styled-components";
import Product from "../components/Product";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { QUERY_CHECKOUT } from "../utils/queries";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../utils/actions";
import Auth from "../utils/auth";