const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for generating SEO tags using SharpAPI.com
 */
class SharpApiSeoTagsService extends SharpApiCoreService {
  /**
   * Generates all most important META tags based on the content provided.
   * Make sure to include link to the website and pictures URL to get as many tags populated as possible.
   *
   * @param {string} text
   * @param {string|null} language
   * @param {string|null} voiceTone
   * @returns {Promise<string>} - The status URL.
   */
  async generateSeoTags(text, language = null, voiceTone = null) {
    const data = { content: text };
    if (language) data.language = language;
    if (voiceTone) data.voice_tone = voiceTone;

    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.SEO_GENERATE_TAGS.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiSeoTagsService };