import { waitFor } from "@testing-library/dom";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { LaunchPad } from "../components/LaunchPad";

describe("LaunchPad", () => {
  describe("on successful fetch", () => {
    it("renders LaunchPad", async () => {
      const validLaunchPadId = "vafb_slc_3w";
      const launchPad = render(
        <MemoryRouter initialEntries={[`/launch-pads/${validLaunchPadId}`]}>
          <Routes>
            <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
          </Routes>
        </MemoryRouter>
      );
      await waitFor(() =>
        expect(
          launchPad.getByText(
            "Vandenberg Air Force Base Space Launch Complex 3W"
          )
        ).toBeTruthy()
      );
    });
  });

  describe("on error", () => {
    it("renders Error", async () => {
      const invalidLaunchPadId = "gibberish";
      const error = render(
        <MemoryRouter initialEntries={[`/launch-pads/${invalidLaunchPadId}`]}>
          <Routes>
            <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
          </Routes>
        </MemoryRouter>
      );
      await waitFor(() =>
        expect(error.getByText("Problems loading the data")).toBeTruthy()
      );
    });
  });
});
