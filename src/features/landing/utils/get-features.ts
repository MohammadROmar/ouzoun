export function features(t: (key: string) => string) {
  const FEATURES_INDICES = [0, 1, 2, 3];

  const features = FEATURES_INDICES.map((i) => ({
    title: t(`features.title.feature${i}`),
    body: t(`features.body.feature${i}`),
  }));

  return features;
}
