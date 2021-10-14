import useSWR, { useSWRInfinite } from "swr";

const fetcher = async (args: RequestInfo) => {
  const response = await fetch(args);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
};

const getSpaceXUrl = (
  path: string | null,
  options: {
    [x: string]: any;
    limit?: any;
    order?: string | undefined;
    sort?: string | undefined;
    site_id?: any;
    offset?: number;
  }
) => {
  const searchParams = new URLSearchParams();
  for (const property in options) {
    searchParams.append(property, options[property]);
  }

  const spaceXApiBase = process.env.REACT_APP_SPACEX_API_URL;
  return `${spaceXApiBase}${path}?${searchParams.toString()}`;
};

export const useSpaceX = (
  path: string | null,
  options: { limit?: number; order?: string; sort?: string; site_id?: any }
) => {
  const endpointUrl = getSpaceXUrl(path, options);
  return useSWR(path ? endpointUrl : null, fetcher);
};

export const useSpaceXPaginated = (
  path: string,
  options: { limit: any; order?: string; sort?: string }
) => {
  return useSWRInfinite((pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) {
      return null;
    }
    return getSpaceXUrl(path, {
      ...options,
      offset: options.limit * pageIndex,
    });
  }, fetcher);
};
