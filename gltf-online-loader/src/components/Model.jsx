import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/fpv_racing_drone_glb.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.1}
        >
          <group
            name="ce1ada9def8f47a8a2a6ff0b80a72e2ffbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="pCylinder31" position={[0, 4.77, 0]}>
                  <group name="pCube22" position={[0, -3.1, 0.27]}>
                    <mesh
                      name="pCube22_blinn21_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube22_blinn21_0.geometry}
                      material={materials.blinn21}
                    />
                    <mesh
                      name="pCube22_genblack_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube22_genblack_0.geometry}
                      material={materials.genblack}
                    />
                    <mesh
                      name="pCube22_gen_white_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube22_gen_white_0.geometry}
                      material={materials.gen_white}
                    />
                  </group>
                  <group name="polySurface194" position={[0, -7.35, 0]}>
                    <mesh
                      name="polySurface194_genblack_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface194_genblack_0.geometry}
                      material={materials.genblack}
                    />
                    <mesh
                      name="polySurface194_pilars_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface194_pilars_0.geometry}
                      material={materials.pilars}
                    />
                    <mesh
                      name="polySurface194_Mocor_and_caps_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface194_Mocor_and_caps_0.geometry}
                      material={materials.Mocor_and_caps}
                    />
                    <mesh
                      name="polySurface194_mycheckered_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface194_mycheckered_0.geometry}
                      material={materials.mycheckered}
                    />
                  </group>
                  <group name="polySurface215" position={[-2.68, -7.35, 0]}>
                    <mesh
                      name="polySurface215_Mocor_and_caps_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface215_Mocor_and_caps_0.geometry}
                      material={materials.Mocor_and_caps}
                    />
                  </group>
                  <group
                    name="pCube10"
                    position={[0.02, -3.32, -1.06]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={0.05}
                  >
                    <mesh
                      name="pCube10_cpulegs_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube10_cpulegs_0.geometry}
                      material={materials.cpulegs}
                    />
                    <mesh
                      name="pCube10_lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube10_lambert2_0.geometry}
                      material={materials.lambert2}
                    />
                    <mesh
                      name="pCube10_cpu1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube10_cpu1_0.geometry}
                      material={materials.cpu1}
                    />
                    <mesh
                      name="pCube10_motherboard_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube10_motherboard_0.geometry}
                      material={materials.motherboard}
                    />
                  </group>
                  <group
                    name="pCube9"
                    position={[0.04, -3.33, -1.14]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={0.6}
                  >
                    <mesh
                      name="pCube9_genblack_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube9_genblack_0.geometry}
                      material={materials.genblack}
                    />
                    <mesh
                      name="pCube9_dhr2_receiver_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube9_dhr2_receiver_0.geometry}
                      material={materials.dhr2_receiver}
                    />
                  </group>
                  <group
                    name="pCube20"
                    position={[0.18, -3.29, -0.76]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={0.02}
                  >
                    <mesh
                      name="pCube20_blinn21_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCube20_blinn21_0.geometry}
                      material={materials.blinn21}
                    />
                  </group>
                  <group name="pasted__polySurface71" position={[0, -7.35, 0]}>
                    <mesh
                      name="pasted__polySurface71_Mocor_and_caps_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.pasted__polySurface71_Mocor_and_caps_0.geometry
                      }
                      material={materials.Mocor_and_caps}
                    />
                  </group>
                  <group
                    name="pCylinder18"
                    position={[-0.14, -2.81, 3.15]}
                    rotation={[1.57, 0, 0]}
                  >
                    <mesh
                      name="pCylinder18_camera_lens_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pCylinder18_camera_lens_0.geometry}
                      material={materials.camera_lens}
                    />
                  </group>
                  <group name="polySurface269" position={[0, -7.35, 0]}>
                    <mesh
                      name="polySurface269_genblack_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface269_genblack_0.geometry}
                      material={materials.genblack}
                    />
                    <mesh
                      name="polySurface269_blinn19_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface269_blinn19_0.geometry}
                      material={materials.blinn19}
                    />
                    <mesh
                      name="polySurface269_Mocor_and_caps_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface269_Mocor_and_caps_0.geometry}
                      material={materials.Mocor_and_caps}
                    />
                    <mesh
                      name="polySurface269_red_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface269_red_wire_0.geometry}
                      material={materials.red_wire}
                    />
                    <mesh
                      name="polySurface269_yellow_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface269_yellow_wire_0.geometry}
                      material={materials.yellow_wire}
                    />
                    <mesh
                      name="polySurface269_black_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface269_black_wire_0.geometry}
                      material={materials.black_wire}
                    />
                    <mesh
                      name="polySurface269_blinn20_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface269_blinn20_0.geometry}
                      material={materials.blinn20}
                    />
                  </group>
                  <group
                    name="polySurface104"
                    position={[-3.38, -8.47, -0.46]}
                    scale={[1.26, 1.25, 1.26]}
                  >
                    <mesh
                      name="polySurface104_pilars_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface104_pilars_0.geometry}
                      material={materials.pilars}
                    />
                    <mesh
                      name="polySurface104_b_10_oct_16motherboard_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes.polySurface104_b_10_oct_16motherboard_0.geometry
                      }
                      material={materials.b_10_oct_16motherboard}
                    />
                  </group>
                  <group name="pPlane4" position={[0, -7.35, 0]}>
                    <mesh
                      name="pPlane4_gen_white_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_gen_white_0.geometry}
                      material={materials.gen_white}
                    />
                    <mesh
                      name="pPlane4_battery_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_battery_0.geometry}
                      material={materials.battery}
                    />
                    <mesh
                      name="pPlane4_yellow_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_yellow_wire_0.geometry}
                      material={materials.yellow_wire}
                    />
                    <mesh
                      name="pPlane4_black_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_black_wire_0.geometry}
                      material={materials.black_wire}
                    />
                    <mesh
                      name="pPlane4_red_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_red_wire_0.geometry}
                      material={materials.red_wire}
                    />
                    <mesh
                      name="pPlane4_Mocor_and_caps_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_Mocor_and_caps_0.geometry}
                      material={materials.Mocor_and_caps}
                    />
                    <mesh
                      name="pPlane4_blinn21_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_blinn21_0.geometry}
                      material={materials.blinn21}
                    />
                    <mesh
                      name="pPlane4_phong1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_phong1_0.geometry}
                      material={materials.phong1}
                    />
                    <mesh
                      name="pPlane4_Battery_texture_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.pPlane4_Battery_texture_0.geometry}
                      material={materials.Battery_texture}
                    />
                  </group>
                  <group name="curve6" position={[0, -7.35, 0]}>
                    <mesh
                      name="curve6_Mocor_and_caps_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.curve6_Mocor_and_caps_0.geometry}
                      material={materials.Mocor_and_caps}
                    />
                    <mesh
                      name="curve6_pilars_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.curve6_pilars_0.geometry}
                      material={materials.pilars}
                    />
                    <mesh
                      name="curve6_cpulegs_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.curve6_cpulegs_0.geometry}
                      material={materials.cpulegs}
                    />
                    <mesh
                      name="curve6_lambert2_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.curve6_lambert2_0.geometry}
                      material={materials.lambert2}
                    />
                    <mesh
                      name="curve6_cpu1_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.curve6_cpu1_0.geometry}
                      material={materials.cpu1}
                    />
                    <mesh
                      name="curve6_motherboard_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.curve6_motherboard_0.geometry}
                      material={materials.motherboard}
                    />
                  </group>
                  <group name="wing7" position={[0, -7.35, 0]}>
                    <mesh
                      name="wing7_yellow_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.wing7_yellow_wire_0.geometry}
                      material={materials.yellow_wire}
                    />
                  </group>
                  <group name="polySurface225" position={[0, -7.35, 0]}>
                    <mesh
                      name="polySurface225_genblack_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface225_genblack_0.geometry}
                      material={materials.genblack}
                    />
                    <mesh
                      name="polySurface225_black_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface225_black_wire_0.geometry}
                      material={materials.black_wire}
                    />
                    <mesh
                      name="polySurface225_yellow_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface225_yellow_wire_0.geometry}
                      material={materials.yellow_wire}
                    />
                    <mesh
                      name="polySurface225_red_wire_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.polySurface225_red_wire_0.geometry}
                      material={materials.red_wire}
                    />
                  </group>
                  <group name="wing_back_3" position={[0, -7.35, 0]}>
                    <group
                      name="polySurface270"
                      position={[-3.03, 4.62, -1.89]}
                    >
                      <mesh
                        name="polySurface270_red_wire_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface270_red_wire_0.geometry}
                        material={materials.red_wire}
                      />
                    </group>
                    <group name="polySurface271" position={[-3.62, 4.62, 2.54]}>
                      <mesh
                        name="polySurface271_red_wire_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface271_red_wire_0.geometry}
                        material={materials.red_wire}
                      />
                    </group>
                    <group name="polySurface272" position={[3.47, 4.62, 2.54]}>
                      <mesh
                        name="polySurface272_red_wire_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface272_red_wire_0.geometry}
                        material={materials.red_wire}
                      />
                    </group>
                    <group name="polySurface273" position={[2.9, 4.62, -1.89]}>
                      <mesh
                        name="polySurface273_red_wire_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.polySurface273_red_wire_0.geometry}
                        material={materials.red_wire}
                      />
                    </group>
                    <group name="transform22" />
                  </group>
                  <mesh
                    name="pCylinder31_gen_white_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder31_gen_white_0.geometry}
                    material={materials.gen_white}
                  />
                  <mesh
                    name="pCylinder31_antena_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.pCylinder31_antena_0.geometry}
                    material={materials.antena}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/fpv_racing_drone_glb.glb");
