import { test, describe, expect } from "@playwright/test";

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo.",
      ),
    ).toBeVisible();
  });
  test("Navigating to a particular Pokemon", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await page.getByRole('link', { name: "Ivysaur"}).click();
    await expect(
      page.getByText(
        "Speed",
      ),
    ).toBeVisible();
  });
});
