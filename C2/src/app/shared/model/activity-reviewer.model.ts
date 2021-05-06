/**
 * © Rolling Array https://rollingarray.co.in/
 *
 *
 * @summary Activity reviewer model
 * @author code@rollingarray.co.in
 *
 * Created at     : 2021-04-29 11:11:02 
 * Last modified  : 2021-05-06 20:19:54
 */


import { ActivityModel } from "./activity.model";
import { ProjectModel } from "./project.model";

export interface ActivityReviewerModel extends ProjectModel, ActivityModel {
    activityReviewId ?: string;
    reviewerUserId ?: string;
    reviewerUserFirstName ?: string;
    reviewerUserLastName ?: string;
    achievedResultValue ?: number;
    reviewerComment ?: string;
    operationType ?: string;
}