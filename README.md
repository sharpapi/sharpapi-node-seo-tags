![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# SEO & Social Media Tags Generator API for Node.js

## 🔍 Generate SEO-optimized meta tags with AI — powered by SharpAPI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-seo-tags.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-seo-tags)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-seo-tags.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI SEO Tags Generator** creates comprehensive SEO meta tags and Open Graph tags for web pages. Perfect for content management systems, blogs, e-commerce platforms, and marketing websites.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Response Format](#response-format)
6. [Examples](#examples)
7. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-seo-tags
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiSeoTagsService } = require('@sharpapi/sharpapi-node-seo-tags');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiSeoTagsService(apiKey);

const content = `
Introducing our new AI-powered task management platform.
Boost productivity with intelligent automation, smart scheduling, and team collaboration tools.
`;

async function generateSeoTags() {
  try {
    // Submit SEO tags generation job
    const statusUrl = await service.generateSeoTags(content, 'English');
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Generated SEO tags:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

generateSeoTags();
```

---

## API Documentation

### Methods

#### `generateSeoTags(content: string, language?: string, voiceTone?: string): Promise<string>`

Generates comprehensive SEO meta tags and Open Graph tags based on content.

**Parameters:**
- `content` (string, required): The web page content to generate SEO tags for
- `language` (string, optional): Output language (default: 'English')
- `voiceTone` (string, optional): Tone of voice for descriptions (e.g., 'Professional', 'Casual')

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.generateSeoTags(
  articleContent,
  'English',
  'Professional'
);
const result = await service.fetchResults(statusUrl);
```

---

## Response Format

The API returns comprehensive SEO and Open Graph tags:

```json
{
  "data": {
    "type": "api_job_result",
    "id": "3c4e887a-0dfd-49b6-8edb-9280e468c210",
    "attributes": {
      "status": "success",
      "type": "seo_generate_tags",
      "result": {
        "meta_tags": {
          "title": "AI-Powered Task Management Platform - Boost Team Productivity",
          "description": "Discover our intelligent task management solution with smart automation, scheduling, and collaboration. Increase productivity by 40% with AI-driven insights.",
          "keywords": "task management, AI automation, productivity tool, team collaboration, smart scheduling",
          "robots": "index, follow",
          "canonical": null,
          "author": null
        },
        "og_tags": {
          "og:title": "AI-Powered Task Management Platform",
          "og:description": "Boost productivity with intelligent automation, smart scheduling, and team collaboration tools",
          "og:type": "website",
          "og:url": null,
          "og:image": null,
          "og:site_name": null,
          "og:locale": "en_US"
        },
        "twitter_tags": {
          "twitter:card": "summary_large_image",
          "twitter:title": "AI-Powered Task Management Platform",
          "twitter:description": "Boost productivity with intelligent automation and smart scheduling",
          "twitter:image": null,
          "twitter:site": null,
          "twitter:creator": null
        }
      }
    }
  }
}
```

**Generated Tags Include:**
- **Meta Tags**: Title, description, keywords, robots directives
- **Open Graph Tags**: OG title, description, type, locale
- **Twitter Card Tags**: Card type, title, description, image

---

## Examples

### Basic SEO Tags Generation

```javascript
const { SharpApiSeoTagsService } = require('@sharpapi/sharpapi-node-seo-tags');

const service = new SharpApiSeoTagsService(process.env.SHARP_API_KEY);

const blogPost = `
  Ultimate Guide to Web Performance Optimization.
  Learn proven techniques to make your website load faster,
  improve user experience, and boost search rankings.
`;

service.generateSeoTags(blogPost, 'English')
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const seoData = result.getResultJson().result;

    console.log('📝 Meta Tags:');
    console.log(`Title: ${seoData.meta_tags.title}`);
    console.log(`Description: ${seoData.meta_tags.description}`);
    console.log(`Keywords: ${seoData.meta_tags.keywords}`);

    console.log('\n🌐 Open Graph Tags:');
    console.log(`OG Title: ${seoData.og_tags['og:title']}`);
    console.log(`OG Description: ${seoData.og_tags['og:description']}`);
  })
  .catch(error => console.error('Generation failed:', error));
```

### CMS Integration

```javascript
const service = new SharpApiSeoTagsService(process.env.SHARP_API_KEY);

async function enrichArticleWithSEO(article) {
  const fullContent = `${article.title}\n\n${article.body}`;

  const statusUrl = await service.generateSeoTags(fullContent, 'English', 'Professional');
  const result = await service.fetchResults(statusUrl);
  const seoData = result.getResultJson().result;

  return {
    ...article,
    seo: {
      metaTitle: seoData.meta_tags.title,
      metaDescription: seoData.meta_tags.description,
      keywords: seoData.meta_tags.keywords.split(', '),
      ogTags: seoData.og_tags,
      twitterTags: seoData.twitter_tags
    }
  };
}

const article = {
  id: 123,
  title: 'Getting Started with React Hooks',
  body: 'React Hooks revolutionized functional components...',
  author: 'Jane Doe'
};

const enrichedArticle = await enrichArticleWithSEO(article);
console.log('Article with SEO:', enrichedArticle);
```

### E-commerce Product Pages

```javascript
const service = new SharpApiSeoTagsService(process.env.SHARP_API_KEY);

async function generateProductSEO(product) {
  const productContent = `
    ${product.name}
    ${product.description}
    Features: ${product.features.join(', ')}
    Price: $${product.price}
    Category: ${product.category}
  `;

  const statusUrl = await service.generateSeoTags(productContent, 'English', 'Enthusiastic');
  const result = await service.fetchResults(statusUrl);
  const seoData = result.getResultJson().result;

  // Format for HTML meta tags
  const metaTags = [
    `<title>${seoData.meta_tags.title}</title>`,
    `<meta name="description" content="${seoData.meta_tags.description}">`,
    `<meta name="keywords" content="${seoData.meta_tags.keywords}">`,
    `<meta property="og:title" content="${seoData.og_tags['og:title']}">`,
    `<meta property="og:description" content="${seoData.og_tags['og:description']}">`,
    `<meta property="og:type" content="product">`,
    `<meta name="twitter:card" content="${seoData.twitter_tags['twitter:card']}">`
  ];

  return metaTags.join('\n');
}

const product = {
  name: 'Professional DSLR Camera',
  description: '24MP full-frame sensor with 4K video',
  features: ['Wi-Fi', 'Touchscreen', 'Weather-sealed'],
  price: 1299,
  category: 'Photography'
};

const htmlTags = await generateProductSEO(product);
console.log('HTML Meta Tags:\n', htmlTags);
```

### Batch Processing for Multiple Pages

```javascript
const service = new SharpApiSeoTagsService(process.env.SHARP_API_KEY);

async function processSiteSEO(pages) {
  const results = await Promise.all(
    pages.map(async (page) => {
      const statusUrl = await service.generateSeoTags(page.content, 'English');
      const result = await service.fetchResults(statusUrl);
      const seoData = result.getResultJson().result;

      return {
        url: page.url,
        title: seoData.meta_tags.title,
        description: seoData.meta_tags.description,
        keywords: seoData.meta_tags.keywords,
        lastUpdated: new Date().toISOString()
      };
    })
  );

  return results;
}

const websitePages = [
  { url: '/products', content: 'Browse our complete product catalog...' },
  { url: '/about', content: 'Learn about our company mission...' },
  { url: '/blog', content: 'Read the latest industry insights...' }
];

const seoMap = await processSiteSEO(websitePages);

console.log('Site SEO Map:');
seoMap.forEach(page => {
  console.log(`\n${page.url}`);
  console.log(`  Title: ${page.title}`);
  console.log(`  Description: ${page.description.substring(0, 80)}...`);
});
```

---

## Use Cases

- **Content Management Systems**: Auto-generate SEO tags for articles and pages
- **E-commerce Platforms**: Optimize product pages for search engines
- **Blog Platforms**: Create compelling meta descriptions for posts
- **Landing Pages**: Generate conversion-focused SEO tags
- **Social Media Sharing**: Ensure proper Open Graph tag implementation
- **SEO Audits**: Generate improved tags for existing content
- **Multi-language Sites**: Create localized SEO tags

---

## SEO Best Practices

The generator follows these SEO guidelines:

- **Title Tags**: 50-60 characters, includes primary keywords
- **Meta Descriptions**: 150-160 characters, compelling and actionable
- **Keywords**: Relevant, specific, and naturally distributed
- **Open Graph**: Optimized for social media sharing
- **Twitter Cards**: Configured for maximum engagement
- **Robots Meta**: Proper indexing directives

---

## API Endpoint

**POST** `/seo/generate_tags`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVY)
- [Product Page](https://sharpapi.com/en/catalog/ai/seo/seo-social-media-tags-generator)

---

## Related Packages

- [@sharpapi/sharpapi-node-generate-keywords](https://www.npmjs.com/package/@sharpapi/sharpapi-node-generate-keywords) - Keyword extraction
- [@sharpapi/sharpapi-node-summarize-text](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text) - Text summarization
- [@sharpapi/sharpapi-node-product-intro](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-intro) - Product descriptions
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
