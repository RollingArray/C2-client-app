import { StringKey } from 'src/app/shared/constant/string.constant';
import { RouteModel } from '../model/route.model';

export class ArrayKey {
	public static readonly APP_PRIMARY_ROUTE_PAGES: RouteModel[] = [
		{
			title: StringKey.SELECTED_PROJECT_SETTINGS,
			children: [
				{
					title: StringKey.VIEW + ' ' + StringKey.PROJECT_MEMBER,
					url: ['members'],
					icon: StringKey.ICON_PROJECT
				},
				{
					title: StringKey.VIEW + ' ' + StringKey.PROJECT_SPRINT,
					url: ['sprints'],
					icon: StringKey.ICON_PROJECT
				},
				// {
				// 	title: StringKey.VIEW + ' ' + StringKey.TASK_TYPE,
				// 	url: ['task','types'],
				// 	icon: StringKey.ICON_PROJECT
				// },
				// {
				// 	title: StringKey.VIEW + ' ' + StringKey.USER_STORY,
				// 	url: ['user','story'],
				// 	icon: StringKey.ICON_PROJECT
				// },
				// {
				// 	title: StringKey.VIEW + ' ' + StringKey.TASK_MEASUREMENT_CRITERIA,
				// 	url: ['task','measurement','criteria'],
				// 	icon: StringKey.ICON_PROJECT
				// },
			]
		},
	]
}



// buttons: [
// 	{
// 		text: StringKey.EDIT + ' ' + StringKey.PROJECT_DETAIL,
// 		icon: StringKey.ICON_EDIT,
// 		handler: () => {
// 			this.editProject(selectedProject);
// 		}
// 	},
// 	{
// 		text: StringKey.VIEW + ' ' + StringKey.PROJECT_MEMBER,
// 		icon: StringKey.ICON_VIEW,
// 		handler: () => {
// 			this.router.navigate([selectedProject.projectId, 'members'], { relativeTo: this.activatedRoute });
// 		}
// 	},
// 	{
// 		text: StringKey.VIEW + ' ' + StringKey.PROJECT_SPRINT,
// 		icon: StringKey.ICON_VIEW,
// 		handler: () => {
// 			this.router.navigate([selectedProject.projectId, 'sprints'], { relativeTo: this.activatedRoute });
// 		}
// 	},
// 	{
// 		text: StringKey.VIEW + ' ' + StringKey.TASK_TYPE,
// 		icon: StringKey.ICON_VIEW,
// 		handler: () => {
// 			this.router.navigate([selectedProject.projectId, 'task', 'types'], { relativeTo: this.activatedRoute });
// 		}
// 	},
// 	{
// 		text: StringKey.VIEW + ' ' + StringKey.USER_STORY,
// 		icon: StringKey.ICON_VIEW,
// 		handler: () => {
// 			this.router.navigate([selectedProject.projectId, 'user', 'story'], { relativeTo: this.activatedRoute });
// 		}
// 	},
// 	{
// 		text: StringKey.VIEW + ' ' + StringKey.TASK_MEASUREMENT_CRITERIA,
// 		icon: StringKey.ICON_VIEW,
// 		handler: () => {
// 			this.router.navigate([selectedProject.projectId, 'task', 'measurement', 'criteria'], { relativeTo: this.activatedRoute });
// 		}
// 	},
// 	{
// 		text: StringKey.CANCEL,
// 		icon: StringKey.ICON_CANCEL,
// 		handler: () => {
// 			//
// 		}
// 	}
// ]