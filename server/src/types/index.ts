export interface Camera {
  id: string;
  name: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Incident {
  id: string;
  cameraId: string;
  camera?: Camera;
  type: string;
  tsStart: Date;
  tsEnd: Date;
  thumbnailUrl: string;
  resolved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IncidentWithCamera extends Incident {
  camera: Camera;
}