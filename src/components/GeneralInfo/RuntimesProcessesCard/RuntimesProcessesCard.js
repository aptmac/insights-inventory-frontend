import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoadingCard from '../LoadingCard';
// import { generalMapper, interfaceMapper } from '../dataMapper';
import { infrastructureSelector } from '../selectors';
import { extraShape } from '../../../constants';

const RuntimesProcessesCardCore = ({
  // infrastructure,
  // handleClick,
  detailLoaded,
  // hasType,
  // hasVendor,
  // hasIPv4,
  // hasIPv6,
  // hasInterfaces,
  // extra,
}) => (
  <LoadingCard
    title="Runtimes Processes"
    isLoading={!detailLoaded}
    items={[
      ...[{ title: 'JVM Instance', value: 'examplejvm' }],
      ...[{ title: 'EAP deployments', value: 'exampleEAP' }],
      ...[{ title: 'Application', value: 'sample_app' }],
      ...[{ title: 'Vendor', value: 'Eclipse Adoptium' }],
      ...[
        {
          title: 'Application directory',
          value: '/path/to/workspace/insights4runtimes-spike',
        },
      ],
      ...[{ title: 'Class version', value: '61.0' }],
      ...[{ title: 'VM name', value: 'OpenJDK 64-Bit Server VM' }],
      ...[
        {
          title: 'Heap gc details',
          value: 'gc::G1 Young Generation::G1 Old Generation',
        },
      ],
      ...[{ title: 'Heap min', value: '512' }],
      ...[{ title: 'Heap max', value: '8192' }],
      ...[{ title: 'Java home path', value: '/usr/lib/jvm/java-17-openjdk/' }],
      ...[
        {
          title: 'Class path',
          value: '/path/to/workspace/insights4runtimes-spike/target/classes...',
        },
      ],
    ]}
    // items={[
    //   ...(hasType ? [{ title: 'Type', value: infrastructure.type }] : []),
    //   ...(hasVendor ? [{ title: 'Vendor', value: infrastructure.vendor }] : []),
    //   ...(hasIPv4
    //     ? [
    //         {
    //           title: 'IPv4 addresses',
    //           value: infrastructure.ipv4?.length,
    //           plural: 'addresses',
    //           singular: 'address',
    //           target: 'ipv4',
    //           onClick: () => {
    //             handleClick(
    //               'IPv4',
    //               generalMapper(infrastructure.ipv4, 'IP address')
    //             );
    //           },
    //         },
    //       ]
    //     : []),
    //   ...(hasIPv6
    //     ? [
    //         {
    //           title: 'IPv6 addresses',
    //           value: infrastructure.ipv6?.length,
    //           plural: 'addresses',
    //           singular: 'address',
    //           target: 'ipv6',
    //           onClick: () => {
    //             handleClick(
    //               'IPv6',
    //               generalMapper(infrastructure.ipv6, 'IP address')
    //             );
    //           },
    //         },
    //       ]
    //     : []),
    //   ...(hasInterfaces
    //     ? [
    //         {
    //           title: 'Interfaces/NICs',
    //           value: infrastructure.nics?.length,
    //           singular: 'NIC',
    //           target: 'interfaces',
    //           onClick: () => {
    //             handleClick(
    //               'Interfaces/NICs',
    //               interfaceMapper(infrastructure.nics),
    //               'medium'
    //             );
    //           },
    //         },
    //       ]
    //     : []),
    //   ...extra.map(({ onClick, ...item }) => ({
    //     ...item,
    //     ...(onClick && { onClick: (e) => onClick(e, handleClick) }),
    //   })),
    // ]}
  />
);

RuntimesProcessesCardCore.propTypes = {
  detailLoaded: PropTypes.bool,
  handleClick: PropTypes.func,
  infrastructure: PropTypes.shape({
    type: PropTypes.string,
    vendor: PropTypes.string,
    ipv4: PropTypes.array,
    ipv6: PropTypes.array,
    nics: PropTypes.array,
  }),
  hasType: PropTypes.bool,
  hasVendor: PropTypes.bool,
  hasIPv4: PropTypes.bool,
  hasIPv6: PropTypes.bool,
  hasInterfaces: PropTypes.bool,
  extra: PropTypes.arrayOf(extraShape),
};
RuntimesProcessesCardCore.defaultProps = {
  detailLoaded: false,
  handleClick: () => undefined,
  hasType: true,
  hasVendor: true,
  hasIPv4: true,
  hasIPv6: true,
  hasInterfaces: true,
  extra: [],
};

export const RuntimesProcessesCard = connect(
  ({ entityDetails: { entity }, systemProfileStore: { systemProfile } }) => ({
    detailLoaded: systemProfile && systemProfile.loaded,
    infrastructure: infrastructureSelector(systemProfile, entity),
  })
)(RuntimesProcessesCardCore);

RuntimesProcessesCard.propTypes = RuntimesProcessesCardCore.propTypes;
RuntimesProcessesCard.defaultProps = RuntimesProcessesCardCore.defaultProps;

export default RuntimesProcessesCard;

// const RuntimesProcessesCardCore = ({
//   runtimesProcesses,
//   handleClick,
//   detailLoaded,
//   hasJvmInstance,
//   hasEapDeployments,
//   hasApplication,
//   hasVendor,
//   hasApplicationDirectory,
//   hasClassVersion,
//   hasVmName,
//   hasHeapGcDetails,
//   hasHeapMin,
//   hasHeapMax,
//   hasJavaHomePath,
//   hasClassPath,
//   extra,
// }) => (
//   <LoadingCard
//     title="Runtimes Processes"
//     isLoading={!detailLoaded}
//     items={[
//       ...(hasType ? [{ title: 'Type', value: infrastructure.type }] : []),
//       ...(hasVendor ? [{ title: 'Vendor', value: infrastructure.vendor }] : []),
//       ...(hasIPv4
//         ? [
//             {
//               title: 'IPv4 addresses',
//               value: infrastructure.ipv4?.length,
//               plural: 'addresses',
//               singular: 'address',
//               target: 'ipv4',
//               onClick: () => {
//                 handleClick(
//                   'IPv4',
//                   generalMapper(infrastructure.ipv4, 'IP address')
//                 );
//               },
//             },
//           ]
//         : []),
//       ...(hasIPv6
//         ? [
//             {
//               title: 'IPv6 addresses',
//               value: infrastructure.ipv6?.length,
//               plural: 'addresses',
//               singular: 'address',
//               target: 'ipv6',
//               onClick: () => {
//                 handleClick(
//                   'IPv6',
//                   generalMapper(infrastructure.ipv6, 'IP address')
//                 );
//               },
//             },
//           ]
//         : []),
//       ...(hasInterfaces
//         ? [
//             {
//               title: 'Interfaces/NICs',
//               value: infrastructure.nics?.length,
//               singular: 'NIC',
//               target: 'interfaces',
//               onClick: () => {
//                 handleClick(
//                   'Interfaces/NICs',
//                   interfaceMapper(infrastructure.nics),
//                   'medium'
//                 );
//               },
//             },
//           ]
//         : []),
//       ...extra.map(({ onClick, ...item }) => ({
//         ...item,
//         ...(onClick && { onClick: (e) => onClick(e, handleClick) }),
//       })),
//     ]}
//   />
// );

// RuntimesProcessesCardCore.propTypes = {
//   detailLoaded: PropTypes.bool,
//   handleClick: PropTypes.func,
//   runtimesProcesses: PropTypes.shape({
//     jvmInstance: PropTypes.string,
//     eapDeployments: PropTypes.string,
//     application: PropTypes.string,
//     vendor: PropTypes.string,
//     applicationDirectory: PropTypes.string,
//     classVersion: PropTypes.string,
//     vmName: PropTypes.string,
//     heapGcDetails: PropTypes.string,
//     heapMin: PropTypes.number,
//     heapMax: PropTypes.number,
//     javaHomePath: PropTypes.string,
//     classPath: PropTypes.string,
//   }),
//   hasJvmInstance: PropTypes.bool,
//   hasEapDeployments: PropTypes.bool,
//   hasApplication: PropTypes.bool,
//   hasVendor: PropTypes.bool,
//   hasApplicationDirectory: PropTypes.bool,
//   hasClassVersion: PropTypes.bool,
//   hasVmName: PropTypes.bool,
//   hasHeapGcDetails: PropTypes.bool,
//   hasHeapMin: PropTypes.bool,
//   hasHeapMax: PropTypes.bool,
//   hasJavaHomePath: PropTypes.bool,
//   hasClassPath: PropTypes.bool,
//   extra: PropTypes.arrayOf(extraShape),
// };
// RuntimesProcessesCardCore.defaultProps = {
//   detailLoaded: false,
//   handleClick: () => undefined,
//   hasJvmInstance: true,
//   hasEapDeployments: true,
//   hasApplication: true,
//   hasVendor: true,
//   hasApplicationDirectory: true,
//   hasClassVersion: true,
//   hasVmName: true,
//   hasHeapGcDetails: true,
//   hasHeapMin: true,
//   hasHeapMax: true,
//   hasJavaHomePath: true,
//   hasClassPath: true,
//   extra: [],
// };
