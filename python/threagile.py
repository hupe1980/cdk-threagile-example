import cdktg

project = cdktg.Project()

model = cdktg.Model(project, 'Model Stub',
    version='1.0.0',
    date='2020-03-31',
    author=cdktg.Author(name='John Doe'),
    business_criticality=cdktg.BusinessCriticality.IMPORTANT)

some_data = cdktg.DataAsset(model, 'Some Data Asset',
    description='Some Description',
    usage=cdktg.Usage.BUSINESS,
    origin='Some Origin',
    owner='Some Owner',
    quantity=cdktg.Quantity.MANY,
    cia_triad=cdktg.CIATriad(
        confidentiality=cdktg.Confidentiality.CONFIDENTIAL,
        integrity=cdktg.Integrity.CRITICAL,
        availability=cdktg.Availability.OPERATIONAL))

some_trust_boundary = cdktg.TrustBoundary(model, 'Some Trust Boundary',
    description='Some Description',
    type=cdktg.TrustBoundaryType.NETWORK_DEDICATED_HOSTER)

some_technical_asset = cdktg.TechnicalAsset(model, 'Some Technical Asset',
    trust_boundary=some_trust_boundary,
    description='Some Description',
    type=cdktg.TechnicalAssetType.PROCESS,
    usage=cdktg.Usage.BUSINESS,
    human_use=False,
    size=cdktg.Size.COMPONENT,
    technology=cdktg.Technology.WEB_SERVICE_REST,
    tags=['some-tag', 'some-other-tag'],
    internet=False,
    machine=cdktg.Machine.VIRTUAL,
    encryption=cdktg.Encryption.NONE,
    owner='Some Owner',
    cia_triad=cdktg.CIATriad(
        confidentiality=cdktg.Confidentiality.CONFIDENTIAL,
        integrity=cdktg.Integrity.CRITICAL,
        availability=cdktg.Availability.CRITICAL),
    multi_tenant=False,
    redundant=True)

some_technical_asset.processes(some_data)

some_other_technical_asset = cdktg.TechnicalAsset(model, 'Some Other Technical Asset',
    description='Some Description',
    type=cdktg.TechnicalAssetType.PROCESS,
    usage=cdktg.Usage.BUSINESS,
    human_use=False,
    size=cdktg.Size.COMPONENT,
    technology=cdktg.Technology.WEB_SERVICE_REST,
    internet=False,
    machine=cdktg.Machine.VIRTUAL,
    encryption=cdktg.Encryption.NONE,
    owner='Some Owner',
    cia_triad=cdktg.CIATriad(
        confidentiality=cdktg.Confidentiality.CONFIDENTIAL,
        integrity=cdktg.Integrity.IMPORTANT,
        availability=cdktg.Availability.IMPORTANT),
    multi_tenant=False,
    redundant=True)

some_other_technical_asset.processes(some_data)

some_traffic = some_technical_asset.communicates_with('Some Traffic', some_other_technical_asset,
    description='Some Description',
    protocol=cdktg.Protocol.HTTPS,
    authentication=cdktg.Authentication.NONE,
    authorization=cdktg.Authorization.NONE,
    vpn=False,
    ip_filtered=False,
    readonly=False,
    usage=cdktg.Usage.BUSINESS)

some_traffic.sends(some_data)

some_shared_runtime = cdktg.SharedRuntime(model, 'Some Shared Runtime',
    description='Some Description')

some_shared_runtime.runs(some_technical_asset, some_other_technical_asset)

project.synth()