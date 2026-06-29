import { App, PluginSettingTab, Setting } from 'obsidian';

import MediaGallery from './main.js';

export interface MediaGallerySetting {
	mySetting: string;
}

export const DEFAULT_SETTINGS: MediaGallerySetting = {
	mySetting: 'default',
};

export class SettingTab extends PluginSettingTab {
	plugin: MediaGallery;

	constructor(app: App, plugin: MediaGallery) {
		super(app, plugin);

		this.plugin = plugin;
	}

	display(): void {
		
	}
}
