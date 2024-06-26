import { type APISpaceXResponse, type Doc } from "../types/api";

export const getLaunchesById = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`);
  const launch = (await res.json()) as Doc;
  return launch;
};

export const getLatestLaunches = async () => {
  const res = await fetch("https://api.spacexdata.com/v4/launches/query", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: "asc",
        },
        limit: 12,
      },
    }),
  });
  const { docs: launches } = (await res.json()) as APISpaceXResponse;
  return launches;
};
