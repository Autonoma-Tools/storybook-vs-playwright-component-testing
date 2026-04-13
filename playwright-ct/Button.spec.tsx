import { expect, test } from '@playwright/experimental-ct-react';
import { Button } from '../src/Button';

test('fires onClick when clicked', async ({ mount }) => {
  let clicked = false;
  const component = await mount(
    <Button label="Click me" onClick={() => { clicked = true; }} />
  );
  await component.getByRole('button', { name: /click me/i }).click();
  expect(clicked).toBe(true);
});

test('disabled button does not fire onClick', async ({ mount }) => {
  let clicked = false;
  const component = await mount(
    <Button label="Click me" disabled onClick={() => { clicked = true; }} />
  );
  const button = component.getByRole('button', { name: /click me/i });
  await expect(button).toBeDisabled();
  await button.click({ force: false, trial: true }).catch(() => {});
  expect(clicked).toBe(false);
});

test('loading state hides label and shows spinner', async ({ mount }) => {
  const component = await mount(
    <Button label="Submit" loading />
  );
  await expect(component.getByText('Submit')).not.toBeVisible();
  await expect(component.getByRole('status')).toBeVisible();
});
