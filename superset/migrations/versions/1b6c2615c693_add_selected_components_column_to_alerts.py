# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
"""add_selected_components_column_to_alerts

Revision ID: 1b6c2615c693
Revises: 0ca9e5f1dacd
Create Date: 2021-11-23 11:10:52.786279

"""

# revision identifiers, used by Alembic.
revision = "1b6c2615c693"
down_revision = "0ca9e5f1dacd"

from alembic import op
import sqlalchemy as sa


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "alerts",
        sa.Column(
            "selected_components",
            sa.Text(),
            nullable=True,
        ),
    )


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("alerts", "selected_components")
    # ### end Alembic commands ###
