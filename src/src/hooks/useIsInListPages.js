import { useLocation } from "react-router-dom";
import routes from "@/constants/routes.js";

function useIsInListPages() {
  const location = useLocation();

  return [routes.home, routes.fund, routes.celebrity].includes(
    location.pathname,
  );
}

export default useIsInListPages;
