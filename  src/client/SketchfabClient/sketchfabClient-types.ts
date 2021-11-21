export namespace SketchfabClientTypes {

  export interface SearchModelsParams {
    q: string;
    user: string;
    tags: string[];
    categories: string[];
    count: number;
    cursor: number;
  }

  export interface Gltf {
    size: number;
  }

  export interface Archives {
    gltf: Gltf;
  }

  export interface Image {
    url: string;
    width: number;
    uid: string;
    height: number;
  }

  export interface Thumbnails {
    images: Image[];
    uri: string;
  }

  export interface Image2 {
    url: string;
    width: number;
    height: number;
    size: number;
  }

  export interface Avatar {
    images: Image2[];
    uid: string;
    uri: string;
  }

  export interface User {
    username: string;
    profileUrl: string;
    account: string;
    displayName: string;
    uid: string;
    uri: string;
    avatar: Avatar;
  }

  export interface Model {
    viewCount: number;
    uid: string;
    name: string;
    animationCount: number;
    viewerUrl: string;
    isPublished: boolean;
    publishedAt: string;
    likeCount: number;
    commentCount: number;
    archives: Archives;
    thumbnails: Thumbnails;
    embedUrl: string;
    isDownloadable: boolean;
    description: string;
    user: User;
  }

  export interface Cursors {
    next: number,
    previous: null
  }

  export type SearchModelsResponse = SketchfubResponse<Model[]>;

  export type CategoriesResponse = SketchfubResponse<Category[]>;

  export interface Category {
    uri: string;
    uid: string;
    name: string;
    slug: string;
  }

  export interface SketchfubResponse<T> {
    cursors: Cursors;
    next: string;
    previous: string;
    results: T;
  }
}

