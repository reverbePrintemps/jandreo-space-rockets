import { waitFor } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router';
import { Launch } from 'src/components/launch';

describe("Launch", () => {
  describe("on successful fetch", () => {
    it("renders Launch", async () => {
      const validLaunchId = "108";
      const launch = render(
        <MemoryRouter initialEntries={[`/launches/${validLaunchId}`]}>
          <Routes>
            <Route path="/launches/:launchId" element={<Launch />} />
          </Routes>
        </MemoryRouter>
      );
      await waitFor(() => expect(launch.getByText("Sentinel-6 Michael Freilich")).toBeTruthy());
    });
  });

  describe("on error", () => {
    it("renders Error", async () => {
      const invalidLaunchId = "gibberish";
      const error = render(
        <MemoryRouter initialEntries={[`/launches/${invalidLaunchId}`]}>
          <Routes>
            <Route path="/launches/:launchId" element={<Launch />} />
          </Routes>
        </MemoryRouter>
      );
      await waitFor(() => expect(error.getByText("Problems loading the data")).toBeTruthy());
    });
  });
});
