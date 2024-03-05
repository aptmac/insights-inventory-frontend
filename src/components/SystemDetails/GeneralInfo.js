import React from 'react';
import { useSelector } from 'react-redux';
import GeneralInformation from '../GeneralInfo/GeneralInformation';
import useFeatureFlag from '../../Utilities/useFeatureFlag';
export { default as TextInputModal } from '../GeneralInfo/TextInputModal';

const GeneralInfoTab = (props) => {
  const systemProfile = useSelector(
    ({ systemProfileStore }) => systemProfileStore?.systemProfile
  );
  const isEdgeHost = systemProfile?.host_type === 'edge';
  const enableEdgeImageDetails = useFeatureFlag(
    'edgeParity.inventory-system-detail'
  );
  const enableEdgeInventoryListDetails = useFeatureFlag(
    'edgeParity.inventory-list'
  );
  // const enableRuntimesInventoryCard = useFeatureFlag(
  //   'runtimes.feature.enabled'
  // );

  return (
    <GeneralInformation
      {...props}
      showImageDetails={
        enableEdgeImageDetails && enableEdgeInventoryListDetails && isEdgeHost
      }
      // showRuntimesProcesses={enableRuntimesInventoryCard}
      showRuntimesProcesses={true}
    />
  );
};

export default GeneralInfoTab;
