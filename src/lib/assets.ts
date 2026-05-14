// UUIDs of images that live under public/assets/step-13/.
// Everything else lives under public/assets/shared/.
const STEP13_UUIDS = new Set([
  '0ad1cf4b-9a93-41b8-8929-f57e3ef4c8d5',
  '1da13cdc-9d6a-4ef0-bec3-6d4696cbcfe2',
  '233ecbe8-3f36-4f9e-a9ca-c0dc62a6ae63',
  '281c615c-136c-4735-ac53-0325f4c0c9f7',
  '31bce5aa-e43b-46b4-a028-b6e18df6e510',
  '36638059-3ed5-4b42-83f9-32dd0afb3dff',
  'bf039f71-59c7-4875-91f8-edfbe4cdc85e',
  'e3948ef8-c6b6-4905-afb0-462e650b65d4',
]);

export function imgFor(uuid: string): string {
  const folder = STEP13_UUIDS.has(uuid) ? 'step-13' : 'shared';
  return `/assets/${folder}/${uuid}.webp`;
}
