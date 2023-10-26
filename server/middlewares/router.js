const { EventsModel } = require("./../api/events/events.model");
const { NewsModel } = require("./../api/news/news.model");
const {
  JobOpportunitiesModel,
} = require("./../api/job-opportunities/job-opportunities.model");
const { AlumniModel } = require("./../api/alumni/alumni.model");
const { StoriesModel } = require("./../api/stories/stories.model");

const routerMiddleware = (app) => {
  app.use("/events", EventsModel);
  app.use("/news", NewsModel);
  app.use("/jobopp", JobOpportunitiesModel);
  app.use("/api", StoriesModel);
  app.use("/alumni", AlumniModel);
};

module.exports = {
  routerMiddleware,
};
