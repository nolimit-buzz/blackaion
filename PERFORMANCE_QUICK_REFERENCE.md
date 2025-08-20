# Performance Optimization Quick Reference

## 🚀 Quick Performance Checklist

### Before Deploying
- [ ] Run `npm run build` - Check for build errors
- [ ] Run Lighthouse audit - Ensure Core Web Vitals are good
- [ ] Check bundle size - Should be < 2MB total
- [ ] Test on mobile device - Verify performance
- [ ] Check API response times - Should be < 600ms

### Performance Budgets
| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| LCP | < 2.5s | 2.5-4s | > 4s |
| FID | < 100ms | 100-300ms | > 300ms |
| CLS | < 0.1 | 0.1-0.25 | > 0.25 |
| TTFB | < 600ms | 600ms-1s | > 1s |
| Bundle Size | < 2MB | 2-3MB | > 3MB |

## 🔧 Key Configuration Files

### `next.config.js`
```javascript
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  compress: true,
}
```

### Environment Variables
```bash
# Required
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_API_TOKEN=your_token
NEXT_PUBLIC_SITE_URL=https://blackaion.com

# Optional
NEXT_PUBLIC_ENABLE_PERF_MONITOR=true
```

## 📊 Performance Monitoring

### Enable Performance Monitoring
```bash
# Add to .env.local
NEXT_PUBLIC_ENABLE_PERF_MONITOR=true
```

### Check Performance Metrics
```javascript
// Open browser console to see metrics
🚀 Performance Metrics: {
  ttfb: 245,
  domContentLoaded: 12,
  loadComplete: 8,
  totalLoadTime: 1250
}
```

## 🎯 Common Performance Issues & Solutions

### Issue: Slow Page Load
**Solution:**
- Check if server-side rendering is enabled
- Verify API caching is working
- Review bundle size

### Issue: Animation Jank
**Solution:**
- Reduce animation duration (max 0.5s)
- Simplify scroll transforms
- Use `will-change` CSS property sparingly

### Issue: Large Bundle Size
**Solution:**
- Run `npx @next/bundle-analyzer`
- Check for unused dependencies
- Use dynamic imports for heavy components

### Issue: TypeScript Errors with Icons
**Solution:**
- Use Lucide React icons only
- Import from `lucide-react`
- Add proper sizing classes (`w-4 h-4`)

## 🛠️ Development Commands

### Performance Testing
```bash
# Build and test
npm run build
npm run start

# Bundle analysis
npx @next/bundle-analyzer

# Lighthouse audit (in Chrome DevTools)
# Open DevTools → Lighthouse → Run audit
```

### Performance Monitoring
```bash
# Enable monitoring
echo "NEXT_PUBLIC_ENABLE_PERF_MONITOR=true" >> .env.local

# Check metrics in browser console
# Look for "🚀 Performance Metrics" logs
```

## 📱 Mobile Performance Tips

### Animation Optimization
```typescript
// Use reduced motion for mobile
const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const animationDuration = isReducedMotion ? 0.1 : 0.5;
```

### Image Optimization
```typescript
// Use responsive images
<Image
  src="/hero-image.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority
/>
```

## 🔍 Debugging Performance Issues

### Check Network Tab
1. Open Chrome DevTools
2. Go to Network tab
3. Reload page
4. Look for:
   - Large file downloads
   - Slow API responses
   - Missing cache headers

### Check Performance Tab
1. Open Chrome DevTools
2. Go to Performance tab
3. Start recording
4. Interact with page
5. Stop recording
6. Look for:
   - Long tasks
   - Layout thrashing
   - Expensive animations

### Check Console for Errors
```javascript
// Look for performance warnings
console.warn('Performance issue detected');
console.error('Bundle size exceeded budget');
```

## 📈 Performance Metrics to Track

### Core Web Vitals
- **LCP** (Largest Contentful Paint) - < 2.5s
- **FID** (First Input Delay) - < 100ms
- **CLS** (Cumulative Layout Shift) - < 0.1

### Additional Metrics
- **TTFB** (Time to First Byte) - < 600ms
- **FCP** (First Contentful Paint) - < 1.8s
- **Bundle Size** - < 2MB

## 🚨 Performance Alerts

### Immediate Action Required
- LCP > 4s
- FID > 300ms
- CLS > 0.25
- Bundle size > 3MB
- Build errors

### Monitor Closely
- LCP 2.5-4s
- FID 100-300ms
- Bundle size 2-3MB
- API response time > 1s

## 📚 Resources

### Tools
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

### Documentation
- [Next.js Performance](https://nextjs.org/docs/advanced-features/performance)
- [Core Web Vitals](https://web.dev/vitals/)
- [Web Performance](https://web.dev/performance/)

### Best Practices
- [React Performance](https://react.dev/learn/render-and-commit)
- [Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Animation Performance](https://web.dev/animations/)

## 🔄 Maintenance Schedule

### Daily
- Monitor build success
- Check for console errors

### Weekly
- Review performance metrics
- Check bundle size changes

### Monthly
- Run full Lighthouse audit
- Review Core Web Vitals
- Update dependencies

### Quarterly
- Performance budget review
- Bundle analysis
- Optimization planning 