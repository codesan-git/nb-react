# Mobile-First Responsive Design Guide

Panduan ini menjelaskan bagaimana menggunakan mobile-first responsive design dalam aplikasi BP React.

## 🎯 Prinsip Mobile-First

Mobile-first berarti kita mendesain untuk mobile terlebih dahulu, kemudian menambahkan fitur untuk desktop. Ini memastikan performa optimal di semua device.

## 📱 Breakpoints

```css
/* Mobile First Breakpoints */
sm: 640px   /* Small devices (landscape phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (laptops) */
xl: 1280px  /* Extra large devices (desktops) */
2xl: 1536px /* 2X large devices (large desktops) */
```

## 🧩 Components yang Tersedia

### ResponsiveContainer

Container yang responsive dengan padding dan max-width yang dapat dikustomisasi.

```tsx
<ResponsiveContainer maxWidth="xl" padding="lg">
  <div>Content here</div>
</ResponsiveContainer>
```

### ResponsiveGrid

Grid system yang mobile-first dengan konfigurasi kolom yang fleksibel.

```tsx
<ResponsiveGrid cols={{ mobile: 1, sm: 2, lg: 3 }} gap="md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</ResponsiveGrid>
```

### ResponsiveText

Text component dengan sizing yang responsive.

```tsx
<ResponsiveText size="lg" weight="bold" color="primary">
  Responsive Text
</ResponsiveText>
```

### ResponsiveCard

Card component dengan variant dan padding yang responsive.

```tsx
<ResponsiveCard variant="elevated" padding="lg" hover>
  <div>Card content</div>
</ResponsiveCard>
```

### MobileNavigation

Navigation component yang optimal untuk mobile.

```tsx
const navItems = [
  { icon: '🏠', label: 'Home', active: true },
  { icon: '📱', label: 'Mobile', onClick: () => {} },
  { icon: '⚙️', label: 'Settings', onClick: () => {} }
]

<MobileNavigation items={navItems} />
```

## 🎨 Utility Classes

### Container Classes

```css
.container-mobile     /* Mobile-first container */
.safe-top           /* Safe area top */
.safe-bottom        /* Safe area bottom */
.safe-left          /* Safe area left */
.safe-right         /* Safe area right */
```

### Touch-Friendly Classes

```css
.touch-target       /* Minimum 44px touch target */
```

### Responsive Text Classes

```css
.text-responsive-xs    /* text-xs sm:text-sm */
.text-responsive-sm    /* text-sm sm:text-base */
.text-responsive-base  /* text-base sm:text-lg */
.text-responsive-lg    /* text-lg sm:text-xl */
.text-responsive-xl    /* text-xl sm:text-2xl */
.text-responsive-2xl   /* text-2xl sm:text-3xl */
```

### Layout Classes

```css
.flex-mobile        /* flex flex-col sm:flex-row */
.grid-mobile        /* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */
.space-mobile       /* space-y-4 sm:space-y-6 lg:space-y-8 */
.gap-mobile         /* gap-4 sm:gap-6 lg:gap-8 */
```

### Navigation Classes

```css
.nav-mobile         /* Fixed bottom navigation */
.card-mobile        /* Mobile-optimized card */
```

## 📐 Best Practices

### 1. Touch Targets

Pastikan semua interactive elements memiliki minimum 44px touch target:

```tsx
<Button className="touch-target">Click me</Button>
```

### 2. Safe Areas

Gunakan safe area untuk devices dengan notch:

```tsx
<div className="safe-top safe-bottom">Content with safe areas</div>
```

### 3. Responsive Images

```tsx
<img
  src={logo}
  className="h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
  alt="Logo"
/>
```

### 4. Mobile Navigation

Gunakan bottom navigation untuk mobile:

```tsx
<MobileNavigation items={navItems} />
```

### 5. Responsive Typography

```tsx
<ResponsiveText size="lg" weight="bold">
  Title
</ResponsiveText>
```

## 🚀 Performance Tips

1. **Lazy Loading**: Gunakan lazy loading untuk images dan components
2. **Critical CSS**: Prioritaskan CSS yang dibutuhkan untuk mobile
3. **Touch Events**: Optimalkan untuk touch events
4. **Viewport**: Pastikan viewport meta tag sudah benar

## 📱 Testing

### Desktop Testing

- Chrome DevTools Device Mode
- Firefox Responsive Design Mode
- Safari Responsive Design Mode

### Mobile Testing

- Chrome Mobile DevTools
- Safari Mobile DevTools
- Physical device testing

### Tools

- Lighthouse untuk performance audit
- WebPageTest untuk speed testing
- BrowserStack untuk cross-browser testing

## 🎯 Contoh Implementasi

Lihat `src/routes/index.tsx` untuk contoh implementasi lengkap mobile-first design dengan semua components yang tersedia.

## 📚 Resources

- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [MDN Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Google Mobile-First Indexing](https://developers.google.com/search/mobile-sites/mobile-first-indexing)
