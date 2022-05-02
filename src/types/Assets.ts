import { Option } from '@polkadot/types/codec';
import { AssetMetadata } from '@polkadot/types/interfaces';
import { PalletAssetsAssetDetails } from '@polkadot/types/lookup';

import { IAt } from '.';

export interface IAssetInfo {
	at: IAt;
	assetId: AssetId | number;
	assetInfo: Option<PalletAssetsAssetDetails>;
	assetMetaData: AssetMetadata;
}
