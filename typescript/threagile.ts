import * as cdktg from 'cdktg'

const project = new cdktg.Project();

const model = new cdktg.Model(project, 'Model Stub', {
  version: '1.0.0',
  date: '2020-03-31',
  author: new cdktg.Author({
    name: 'John Doe',
  }),
  businessCriticality: cdktg.BusinessCriticality.IMPORTANT,
});

const someData = new cdktg.DataAsset(model, 'Some Data Asset', {
  description: 'Some Description',
  usage: cdktg.Usage.BUSINESS,
  origin: 'Some Origin',
  owner: 'Some Owner',
  quantity: cdktg.Quantity.MANY,
  ciaTriad: new cdktg.CIATriad({
    confidentiality: cdktg.Confidentiality.CONFIDENTIAL,
    integrity: cdktg.Integrity.CRITICAL,
    availability: cdktg.Availability.OPERATIONAL,
  }),
});

const someTrustBoundary = new cdktg.TrustBoundary(model, 'Some Trust Boundary', {
  description: 'Some Description',
  type: cdktg.TrustBoundaryType.NETWORK_DEDICATED_HOSTER,
});

const someTechnicalAsset = new cdktg.TechnicalAsset(model, 'Some Technical Asset', {
  trustBoundary: someTrustBoundary,
  description: 'Some Description',
  type: cdktg.TechnicalAssetType.PROCESS,
  usage: cdktg.Usage.BUSINESS,
  humanUse: false,
  size: cdktg.Size.COMPONENT,
  technology: cdktg.Technology.WEB_SERVICE_REST,
  tags: ["some-tag", "some-other-tag"],
  internet: false,
  machine: cdktg.Machine.VIRTUAL,
  encryption: cdktg.Encryption.NONE,
  owner: 'Some Owner',
  ciaTriad: new cdktg.CIATriad({
    confidentiality: cdktg.Confidentiality.CONFIDENTIAL,
    integrity: cdktg.Integrity.CRITICAL,
    availability: cdktg.Availability.CRITICAL,
  }),
  multiTenant: false,
  redundant: true,
});

someTechnicalAsset.process(someData);

const someOtherTechnicalAsset = new cdktg.TechnicalAsset(model, 'Some Other Technical Asset', {
  description: 'Some Description',
  type: cdktg.TechnicalAssetType.PROCESS,
  usage: cdktg.Usage.BUSINESS,
  humanUse: false,
  size: cdktg.Size.COMPONENT,
  technology: cdktg.Technology.WEB_SERVICE_REST,
  internet: false,
  machine: cdktg.Machine.VIRTUAL,
  encryption: cdktg.Encryption.NONE,
  owner: 'Some Owner',
  ciaTriad: new cdktg.CIATriad({
    confidentiality: cdktg.Confidentiality.CONFIDENTIAL,
    integrity: cdktg.Integrity.IMPORTANT,
    availability: cdktg.Availability.IMPORTANT,
  }),
  multiTenant: false,
  redundant: true,
});

someOtherTechnicalAsset.process(someData);

const someTraffic = someTechnicalAsset.communicateWith('Some Traffic', someOtherTechnicalAsset, {
  description: 'Some Description',
  protocol: cdktg.Protocol.HTTPS,
  authentication: cdktg.Authentication.NONE,
  authorization: cdktg.Authorization.NONE,
  vpn: false,
  ipFiltered: false,
  readonly: false,
  usage: cdktg.Usage.BUSINESS,
});

someTraffic.send(someData);


const someSharedRuntime = new cdktg.SharedRuntime(model, "Some Shared Runtime", {
  description: "Some Description",
});

someSharedRuntime.run(someTechnicalAsset, someOtherTechnicalAsset);

project.synth();
