/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * 'License'); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * 'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { TruthyParam } from './queryParamConfig';

describe('url utils', () => {
  describe('TruthyParam', () => {
    // The behavior specified by this test is intended to preserve
    // specific url parameters behavior.
    it('decodes "true" to true', () => {
      expect(TruthyParam.decode('true')).toEqual(true);
    });
    it('decodes "1" to true', () => {
      expect(TruthyParam.decode('1')).toEqual(true);
    });
    it('decodes "false" to false', () => {
      expect(TruthyParam.decode('false')).toEqual(false);
    });
    it('decodes "0" to false', () => {
      expect(TruthyParam.decode('0')).toEqual(false);
    });
    it('encodes true', () => {
      expect(TruthyParam.encode(true)).toEqual('true');
    });
    it('encodes false', () => {
      expect(TruthyParam.encode(false)).toEqual('false');
    });
  });
});
