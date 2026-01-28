import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/index.css";
import App from "./Screens/App.jsx";
import Excercise from "./Screens/Excercise.jsx";
import StateManagment from "./Screens/StateManagment.jsx";
import ControlledCompoInputField from "./Screens/ControlledCompoInputField.jsx";
import CheckBoxes from "./Screens/CheckBoxes.jsx";
import RadioButton from "./Screens/RadioButton.jsx";
import Dropdown from "./Screens/Dropdown.jsx";
import LIJSXMapFunction from "./Screens/LoopInJSXMapFunction.jsx";
import ReuseComponentforArray from "./Screens/ReuseComponentforArray.jsx";
import PropsTaskClock from "./Screens/PropsTaskClock.jsx";
import NestedLoop from "./Screens/NestedLooping.jsx";
import UseEffectHook from "./Hooks/UseEffectHook.jsx";
import ComponentLifeCycle from "./Screens/ComponentLifeCycle.jsx";
import StylingUsingCSS from "./Screens/StylingUsingCSS.jsx";
import ExcerciseStyleCss from "./Screens/ExcerciseStyleCss.jsx";
import InlineStyles from "./Screens/InlineStyles.jsx";
import DynamicConditionalInlineStyle from "./Screens/DynamicConditionalInlineStyle.jsx";
import BootstrapButtonAlert from "./Screens/BootstrapButtonAlert.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // import for BOOTSTRAP CSS from https://react-bootstrap.netlify.app/docs/getting-started/introduction
import BootstrapNavBar from "./Screens/BootstrapNavBar.jsx";
import UseRefHook from "./Hooks/UseRefHook.jsx";
import UnControlledCompoInputField from "./Screens/UnControlledCompoInputField.jsx";
import ParentCompFun from "./Screens/ParentCompFun.jsx";
import ForwardRef from "./Screens/ForwardRef.jsx";
import UseFormStatusHook from "./Hooks/UseFormStatusHook.jsx";
import UseTransitionHook from "./Hooks/UseTransitionHook.jsx";
import PureComponents from "./Components/PureComponents.jsx";
import DerivedState from "./Screens/DerivedState.jsx";
import LiftingStateUp from "./Screens/LiftingStateUp.jsx";
import UpdatingObjectsinState from "./Screens/UpdatingObjectsinState.jsx";
import UpdatingArrayinState from "./Screens/UpdatingArrayinState.jsx";
import UseActionStateHook from "./Hooks/UseActionStateHook.jsx";
import UseIdHook from "./Hooks/UseIdHook.jsx";
import Fragment from "./Screens/Fragment.jsx";
import ContextApi from "./Screens/ContextApi.jsx";
import CustomHooks from "./Screens/CustomHooks.jsx";
import ReactRoute from "./Routes/ReactRoute.jsx";
import { BrowserRouter } from "react-router";
import { Nav } from "react-bootstrap";
import NavBar from "./Routes/NavBar.jsx";
import NestedNavBar from "./Routes/NestedNavBar.jsx";
import LayoutIndexRoute from "./Routes/Layout&IndexRoute.jsx";
import RoutePrefix from "./Routes/RoutePrefix.jsx";
import DynamicRoutes from "./Routes/DynamicRoutes.jsx";
import OptionalSegment from "./Routes/OptionalSegment.jsx";
import NavLinkActiveClass from "./Routes/NavLink&ActiveClass.jsx";
import TailwindSetup from "./Screens/TailwindSetup.jsx";
import APIMethods from "./Screens/APIMethods.jsx";
import ApiUsingLoader from "./Screens/ApiUsingLoader.jsx";
import UserRoutes from "./Screens/UserRoutes.jsx";
import ValidationUseActionState from "./Screens/ValidationUseActionState.jsx";
import UseReducerHook from "./Hooks/UseReducerhook.jsx";
import LazyLoading from "./Screens/LazyLoading.jsx";
import UseAPIFeature from "./Screens/UseAPIFeature.jsx";
import UseOptimisticHook from "./Hooks/UseOptimisticHook.jsx";
import ActivityFeature from "./Screens/ActivityFeature.jsx";
import UseEffectEvent from "./Hooks/UseEffectEvent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseEffectEvent />
    <hr />
    <ActivityFeature />
    <hr />
    <UseOptimisticHook />
    <hr />
    <UseAPIFeature />
    <hr />
    <LazyLoading />
    <hr />
    <UseReducerHook />
    <hr />
    <BrowserRouter>
      {/* 
      🌐 BrowserRouter:
      - It wraps your entire app.
      - Enables React Router to listen to URL changes.
      - Keeps UI in sync with the browser’s address bar.
    */}
      <ValidationUseActionState />
      <hr />
      <UserRoutes />
      <hr />
      {/* <ApiUsingLoader />
      <hr />
      <APIMethods />
      <hr />
      <TailwindSetup />
      <hr />
      <NavLinkActiveClass />
      <hr />
      <OptionalSegment />
      <hr />
      <DynamicRoutes />
      <hr />
      <RoutePrefix />
      <hr />
      <LayoutIndexRoute />
      <hr />
      <NestedNavBar />
      <hr />
      <NavBar />
      <hr />
      <ReactRoute /> */}
    </BrowserRouter>
    <hr />
    <CustomHooks />
    <hr />
    <ContextApi />
    <hr />
    {/* <Fragment />
    <hr /> */}
    <UseIdHook />
    <hr />
    <UseActionStateHook />
    <hr />
    <UpdatingArrayinState />
    <hr />
    <UpdatingObjectsinState />
    <hr />
    <LiftingStateUp />
    <hr />
    <DerivedState />
    <hr />
    <PureComponents />
    <hr />
    <UseTransitionHook />
    <hr />
    <UseFormStatusHook />
    <hr />
    <ForwardRef />
    <hr />
    <ParentCompFun />
    <hr />
    <UnControlledCompoInputField />
    <hr />
    <UseRefHook />
    <hr />
    <BootstrapNavBar />
    <hr />
    <BootstrapButtonAlert />
    <hr />
    <DynamicConditionalInlineStyle />
    <hr />
    <InlineStyles />
    <hr />
    <ExcerciseStyleCss />
    <hr />
    <StylingUsingCSS />
    <hr />
    <ComponentLifeCycle />
    <hr />
    <UseEffectHook />
    <hr />
    <NestedLoop />
    <hr />
    <PropsTaskClock />
    <hr />
    <ReuseComponentforArray />
    <hr />
    <LIJSXMapFunction />
    <hr />
    <Dropdown />
    <hr />
    <RadioButton />
    <hr />
    <CheckBoxes />
    <hr />
    <ControlledCompoInputField />
    <hr />
    <StateManagment />
    <hr />
    <Excercise />
    <hr />
    <App />
    <hr />
  </StrictMode>,
);
