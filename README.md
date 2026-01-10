![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# SEO & Social Media Tags Generator API for Node.js

## 🔍 Generate SEO and social media tags — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-seo-tags.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-seo-tags)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-seo-tags.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI SEO Tags Generator** creates optimized meta tags, descriptions, and social media tags based on content. Improves search engine rankings and social media presence.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

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

const content = 'Article about AI and machine learning trends';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.generateSeoTags(content);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsaG).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiSeoTagsService } = require('@sharpapi/sharpapi-node-seo-tags');

const service = new SharpApiSeoTagsService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/seo/seo-social-media-tags-generator).

---

## Use Cases

- **SEO Optimization**: Generate meta titles, descriptions, and keywords
- **Social Media**: Create Open Graph and Twitter Card tags
- **Content Publishing**: Automate metadata generation for blog posts
- **E-commerce**: Optimize product pages for search engines
- **Landing Pages**: Create compelling meta descriptions for campaigns
- **Bulk Operations**: Generate tags for large content libraries

---

## API Endpoint

**POST** `/seo/generate_tags`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsaG)
- [Product Page](https://sharpapi.com/en/catalog/ai/seo/seo-social-media-tags-generator)

---

## Related Packages

- [@sharpapi/sharpapi-node-generate-keywords](https://www.npmjs.com/package/@sharpapi/sharpapi-node-generate-keywords)
- [@sharpapi/sharpapi-node-summarize-text](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text)
- [@sharpapi/sharpapi-node-product-description](https://www.npmjs.com/package/@sharpapi/sharpapi-node-product-description)

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
